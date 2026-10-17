use std::path::Path;

use parser::DarkestFile;
use tokio::{fs, io};
use xml_parser::LocFile;

use crate::types::{ClassModInfo, Image, SkillData};

pub struct ModReader<'a> {
    name: &'a str,
    root: &'a Path,
}

impl<'a> ModReader<'a> {
    pub fn new(name: &'a str, root: &'a Path) -> Self {
        Self { name, root }
    }

    pub async fn read_darkest(&self, mod_info: &mut ClassModInfo) -> anyhow::Result<()> {
        let info_file = self.root.join(self.name.to_string() + ".info.darkest");
        let art_file = self.root.join(self.name.to_string() + ".art.darkest");

        mod_info.info = parse_darkest(&info_file).await?;
        mod_info.art = parse_darkest(&art_file).await?;

        print!("found darkest files. ");

        Ok(())
    }

    pub async fn read_portrait(&self, mod_info: &mut ClassModInfo) -> anyhow::Result<()> {
        let file_name = self.name.to_string() + "_portrait_roster.png";
        let default = self
            .root
            .join(self.name.to_string() + "_A")
            .join(&file_name);

        // Not every mod uses <name>_A for its default skin, so fall back to
        // the first skin folder (sorted by name) that has a roster portrait
        let file = if default.is_file() {
            default
        } else {
            let mut candidates: Vec<_> = std::fs::read_dir(self.root)?
                .flatten()
                .map(|entry| entry.path().join(&file_name))
                .filter(|path| path.is_file())
                .collect();
            candidates.sort();
            candidates.into_iter().next().unwrap_or(default)
        };

        match read_image(&file).await {
            Ok(data) => mod_info.portrait = data,
            Err(e) => {
                print!("portrait failed. ");
                return Err(anyhow::anyhow!("failed to read portrait: {}", e));
            }
        }

        print!("found portrait . ");

        Ok(())
    }

    pub async fn read_loc(&self, mod_info: &mut ClassModInfo) -> anyhow::Result<()> {
        // Usually /<steam_id>/localization/, but DLC heroes are nested deeper
        // (e.g. dlc/<id>/features/flagellant/heroes/flagellant/) and use the
        // closest localization folder above them
        let path = self
            .root
            .ancestors()
            .skip(2)
            .map(|dir| dir.join("localization"))
            .find(|dir| dir.is_dir())
            .unwrap_or_else(|| self.root.join("../../localization"));

        let mut files_to_read = vec![];

        let dir_iter = match std::fs::read_dir(&path) {
            Ok(dir_iter) => dir_iter,
            Err(e) => {
                print!("loc not found. ");
                return Err(anyhow::anyhow!("failed to read {:?}: {}", path, e));
            }
        };
        for entry in dir_iter.flatten() {
            if let Some(entry_path) = entry.path().to_str() {
                if entry_path.ends_with(".string_table.xml") {
                    files_to_read.push(entry_path.to_string());
                }
            }
        }

        let mut read_ok = 0;
        let mut read_fail = 0;
        let mut parse_ok = 0;
        let mut parse_fail = 0;

        for file in &files_to_read {
            // Some mods ship string tables that aren't valid UTF-8
            match std::fs::read(file) {
                Ok(data) => {
                    read_ok += 1;
                    let data = String::from_utf8_lossy(&data).into_owned();
                    if let Ok(xml) = xml_parser::parse_loc_xml(data) {
                        merge_xml(&mut mod_info.locs, xml);
                        parse_ok += 1;
                    } else {
                        parse_fail += 1;
                    }
                }
                Err(_) => {
                    read_fail += 1;
                    parse_fail += 1;
                }
            }
        }

        print!(
            "loc({:>2} of read {:>2}/{:>2}, parse {:>2}/{:>2}) ",
            files_to_read.len(),
            read_ok,
            read_fail + read_ok,
            parse_ok,
            parse_fail + parse_ok,
        );

        Ok(())
    }

    pub async fn read_skills(&self, mod_info: &mut ClassModInfo) -> anyhow::Result<()> {
        let skills = get_all_skills(&mod_info.art);
        print!("found {:>2} skills ", skills.len());

        let mut ok = 0;
        let mut fail = 0;

        let mut result = vec![];
        for mut data in skills.into_iter() {
            match get_icon(self.root, self.name, &data.icon).await {
                Ok(icon_data) => {
                    data.img = icon_data;
                    ok += 1;
                }
                Err(_) => {
                    fail += 1;
                }
            };

            let key = format!("combat_skill_name_{}_{}", self.name, data.key);
            if let Some(value) = mod_info.locs.get(&key) {
                data.name = value[0].to_string();
            }

            result.push(data);
        }

        print!("got {:>2} fail {:>2} ", ok, fail);

        mod_info.skills = result;

        Ok(())
    }

    // Workshop mods live in /<steam_id>/heroes/<name>/. Base game and DLC
    // heroes don't have a numeric folder there, so they get no steam ID.
    pub fn read_steam_id(&self, mod_info: &mut ClassModInfo) {
        let id = self
            .root
            .parent()
            .and_then(Path::parent)
            .and_then(Path::file_name)
            .and_then(|id| id.to_str())
            .filter(|id| !id.is_empty() && id.chars().all(|c| c.is_ascii_digit()));

        if let Some(id) = id {
            mod_info.steam_id = id.to_string();
        }

        print!("{:>11} ", mod_info.steam_id);
    }

    pub async fn read_icons_equip(&self, mod_info: &mut ClassModInfo) -> anyhow::Result<()> {
        let mut armour_names = ["", "", "", "", ""];
        let mut weapon_names = ["", "", "", "", ""];

        for (fallback, (_, map)) in mod_info
            .art
            .iter()
            .filter(|(key, _)| key == "armour")
            .enumerate()
        {
            if let Some(name) = map.get("name") {
                if let Some(key) = name.first() {
                    let index = match key.chars().last() {
                        Some('0') => 0,
                        Some('1') => 1,
                        Some('2') => 2,
                        Some('3') => 3,
                        Some('4') => 4,
                        _ => fallback,
                    };

                    if index >= 5 {
                        continue;
                    }

                    if let Some(icon) = map.get("icon") {
                        if let Some(icon) = icon.first() {
                            armour_names[index] = icon.trim_end_matches(".png");
                        }
                    }
                }
            }
        }

        for (fallback, (_, map)) in mod_info
            .art
            .iter()
            .filter(|(key, _)| key == "weapon")
            .enumerate()
        {
            if let Some(name) = map.get("name") {
                if let Some(key) = name.first() {
                    let index = match key.chars().last() {
                        Some('0') => 0,
                        Some('1') => 1,
                        Some('2') => 2,
                        Some('3') => 3,
                        Some('4') => 4,
                        _ => fallback,
                    };

                    if index >= 5 {
                        continue;
                    }

                    if let Some(icon) = map.get("icon") {
                        if let Some(icon) = icon.first() {
                            weapon_names[index] = icon.trim_end_matches(".png");
                        }
                    }
                }
            }
        }

        let mut path = self.root.to_path_buf();
        path.push("icons_equip");

        let mut found = 0;
        let mut err = 0;

        for (i, name) in armour_names.iter().enumerate() {
            let mut armour = path.to_path_buf();
            armour.push(format!("{}.png", name));

            let result = match read_image(&armour).await {
                Ok(data) => {
                    found += 1;
                    data
                }
                Err(_) => {
                    err += 1;
                    Image::new()
                }
            };

            mod_info.equip_armour[i] = result;
        }

        for (i, name) in weapon_names.iter().enumerate() {
            let mut armour = path.to_path_buf();
            armour.push(format!("{}.png", name));

            let result = match read_image(&armour).await {
                Ok(data) => {
                    found += 1;
                    data
                }
                Err(_) => {
                    err += 1;
                    Image::new()
                }
            };

            mod_info.equip_weapon[i] = result;
        }

        print!("eqp ({}) ok {}", found + err, found);

        Ok(())
    }
}

pub async fn parse_darkest(path: &Path) -> anyhow::Result<DarkestFile> {
    let info_data = fs::read_to_string(&path).await?;
    anyhow::Ok(parser::parse_darkest(info_data))
}

pub async fn get_icon(root: &Path, name: &str, icon: &str) -> io::Result<Image> {
    let mut path = root.to_path_buf();
    path.push(format!("{}.ability.{}.png", name, icon));

    read_image(&path).await
}

// Edge case: art and info files might not have the same skills
pub fn get_all_skills(info: &DarkestFile) -> Vec<SkillData> {
    let mut result = vec![];

    for (_, map) in info.iter().filter(|(key, _)| key == "combat_skill") {
        if let (Some(id), Some(icon)) = (map.get("id"), map.get("icon")) {
            if let (Some(skill_name), Some(skill_icon)) = (id.first(), icon.first()) {
                result.push(SkillData {
                    key: skill_name.to_string(),
                    name: String::new(),
                    icon: skill_icon.to_string(),
                    img: Image::new(),
                });
            }
        }
    }

    result
}

pub async fn read_image(path: &Path) -> io::Result<Image> {
    let file = fs::read(path).await?;
    Ok(png_compr::compress(file))
}

fn merge_xml(source: &mut LocFile, input: LocFile) {
    for (key, val) in input {
        _ = source.entry(key).or_insert(val);
    }
}

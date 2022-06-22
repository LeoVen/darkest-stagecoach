use std::{collections::HashMap, path::Path};

use parser::DarkestFile;
use tokio::{fs, io};

use crate::types::{ClassModInfo, SkillData};

pub struct ModReader<'a> {
    name: &'a str,
    root: &'a Path,
    exceptions: HashMap<&'static str, &'static str>,
}

impl<'a> ModReader<'a> {
    pub fn new(name: &'a str, root: &'a Path) -> Self {
        Self {
            name,
            root,
            exceptions: ModReader::file_exceptions(),
        }
    }

    // Exceptions for loc files and steam ID
    pub fn file_exceptions() -> HashMap<&'static str, &'static str> {
        return HashMap::from([
            ("abomination", "heroes"),
            ("antiquarian", "heroes"),
            ("bounty_hunter", "heroes"),
            ("arbalest", "heroes"),
            ("crusader", "heroes"),
            ("grave_robber", "heroes"),
            ("hellion", "heroes"),
            ("highwayman", "heroes"),
            ("flagellant", "CC"),
            ("houndmaster", "heroes"),
            ("jester", "heroes"),
            ("leper", "heroes"),
            ("man_at_arms", "heroes"),
            ("occultist", "heroes"),
            ("plague_doctor", "heroes"),
            ("shieldbreaker", "shieldbreaker"),
            ("vestal", "heroes"),
        ]);
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
        let folder = self.root.join(self.name.to_string() + "_A");
        let file = folder.join(self.name.to_string() + "_portrait_roster.png");

        match image_to_base64(&file).await {
            Ok(data) => mod_info.portrait = data,
            Err(e) => {
                print!("portrait failed. ");
                return Err(anyhow::anyhow!("failed to read portrait: {}", e));
            }
        }

        print!("found portrait . ");

        Ok(())
    }

    // TODO there is no pattern. Must read all .string_table.xml files!
    pub async fn read_loc(&self, mod_info: &mut ClassModInfo) -> anyhow::Result<()> {
        let mut name = self.name;
        // The default heroes use a shared loc file
        if let Some(other) = self.exceptions.get(self.name) {
            name = other;
        }

        let mut path = self.root.to_path_buf();
        _ = path.pop(); // /<steam_id>/heroes/
        _ = path.pop(); // /<steam_id>/
        path.push("localization"); // /<steam_id>/localization/
        path.push(format!("{}.string_table.xml", name));

        match std::fs::read_to_string(path) {
            Ok(data) => {
                print!("read loc ok!  ");
                if let Ok(xml) = xml_parser::parse_loc_xml(data) {
                    mod_info.locs = xml;
                    print!("parse ok! . ");
                } else {
                    print!("parse fail. ");
                }
            }
            Err(_) => {
                print!("read loc fail ");
                print!("parse fail. ");
            }
        }

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

    pub async fn read_guild_header(&self, mod_info: &mut ClassModInfo) -> anyhow::Result<()> {
        let mut path = self.root.to_path_buf();
        path.push(format!("{}_guild_header.png", self.name));

        if let Ok(data) = image_to_base64(&path).await {
            mod_info.guild = data;
            print!("guild found. ");
        } else {
            print!("guild fail . ");
        }

        Ok(())
    }

    pub fn read_steam_id(&self, mod_info: &mut ClassModInfo) {
        if self.exceptions.contains_key(&*mod_info.key) {
            return;
        }

        // There are two ways of doing this
        // 1- Get from file path (folder is the steam ID)
        // 2- Get from project.xml at the root of the steam folder

        // Doing it as 1 because it is simpler and works for now

        let mut path = self.root.to_path_buf();

        _ = path.pop(); // /<steam_id>/heroes/
        _ = path.pop(); // /<steam_id>/

        if let Some(id) = path.file_name() {
            if let Some(id) = id.to_str() {
                mod_info.steam_id = id.to_string();
                print!("{:>11} ", mod_info.steam_id);
            }
        }
    }

    // pub async fn read_icons_equip(&self, mod_info: &mut ClassModInfo) -> anyhow::Result<()> {
    //     // TODO get all equip icons
    //     todo!()
    // }
}

pub async fn parse_darkest(path: &Path) -> anyhow::Result<DarkestFile> {
    let info_data = fs::read_to_string(&path).await?;
    anyhow::Ok(parser::parse_darkest(info_data))
}

pub async fn get_icon(root: &Path, name: &str, icon: &str) -> io::Result<String> {
    let mut path = root.to_path_buf();
    path.push(format!("{}.ability.{}.png", name, icon));

    image_to_base64(&path).await
}

// Edge case: art and info files might not have the same skills
pub fn get_all_skills(info: &DarkestFile) -> Vec<SkillData> {
    let mut result = vec![];

    for (_, map) in info.iter().filter(|(key, _)| key == "combat_skill") {
        if let (Some(id), Some(icon)) = (map.get("id"), map.get("icon")) {
            if let (Some(skill_name), Some(skill_icon)) = (id.get(0), icon.get(0)) {
                result.push(SkillData {
                    key: skill_name.to_string(),
                    name: String::new(),
                    icon: skill_icon.to_string(),
                    img: String::new(),
                });
            }
        }
    }

    result
}

pub async fn image_to_base64(path: &Path) -> io::Result<String> {
    let file = fs::read(path).await?;
    // TODO this is too slow, parallelize this in a later step!
    let file = png_compr::compress(file);
    return Ok(base64::encode(file));
}

use std::path::Path;

use parser::DarkestFile;
use tokio::{fs, io};

use crate::types::{ClassModInfo, SkillData};

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
        let folder = self.root.join(self.name.to_string() + "_A");
        let file = folder.join(self.name.to_string() + "_portrait_roster.png");

        match image_to_base64(&file).await {
            Ok(data) => mod_info.portrait = data,
            Err(e) => return Err(anyhow::anyhow!("failed to read portrait: {}", e)),
        }

        print!("found portrait. ");

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

            // TODO get skill name

            result.push(data);
        }

        print!("got {} fail {} ", ok, fail);

        mod_info.skills = result;

        Ok(())
    }
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
    return Ok(base64::encode(file));
}

use std::collections::HashMap;

/// A compressed JPEG image, empty if it couldn't be read
pub type Image = Vec<u8>;

#[derive(Default)]
pub struct ClassModInfo {
    pub key: String,
    pub art: parser::DarkestFile,
    pub info: parser::DarkestFile,
    pub portrait: Image,
    pub skills: Vec<SkillData>,
    pub locs: HashMap<String, Vec<String>>,
    pub steam_id: String,
    pub equip_armour: [Image; 5],
    pub equip_weapon: [Image; 5],
    // TODO effects
    // TODO camping skills
}

pub struct SkillData {
    pub key: String,
    pub name: String,
    pub icon: String,
    pub img: Image,
}

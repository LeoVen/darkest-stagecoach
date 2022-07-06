use std::collections::HashMap;

// TODO read ability icons and icons_equip
#[derive(Default)]
pub struct ClassModInfo {
    pub key: String,
    pub art: parser::DarkestFile,
    pub info: parser::DarkestFile,
    pub portrait: String, // base64 encoded image
    pub skills: Vec<SkillData>,
    pub locs: HashMap<String, Vec<String>>,
    pub guild: String,
    pub steam_id: String,
    pub equip_armour: [String; 5],
    pub equip_weapon: [String; 5],
    // TODO effects
    // TODO camping skills
}

pub struct SkillData {
    pub key: String,
    pub name: String,
    pub icon: String,
    pub img: String, // base64 encoded image
}

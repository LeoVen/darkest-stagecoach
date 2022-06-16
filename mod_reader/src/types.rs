// TODO read ability icons and icons_equip
#[derive(Default)]
pub struct ClassModInfo {
    pub key: String,
    pub art: parser::DarkestFile,
    pub info: parser::DarkestFile,
    pub portrait: String, // base64 encoded image
    pub skills: Vec<SkillData>,
    // TODO
    pub guild_header: String,
    // TODO equip icons
    // TODO effects
    // TODO camping skills
}

pub struct SkillData {
    pub key: String,
    pub name: String,
    pub icon: String,
    pub img: String, // base64 encoded image
}

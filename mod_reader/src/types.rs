use std::{collections::HashMap, sync::Arc};

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
    /// The effects and buffs of the mod this class belongs to, shared by all
    /// its classes
    pub effects: Arc<ModEffects>,
    /// The workshop description (`project.xml`), BBCode with XML entities
    /// decoded. Empty for base game heroes and mods that don't ship one.
    pub description: String,
    // TODO camping skills
}

pub struct SkillData {
    pub key: String,
    pub name: String,
    pub icon: String,
    pub img: Image,
}

/// Every effect and buff a mod defines. Skills refer to effects by name and
/// effects to buffs by id.
#[derive(Default)]
pub struct ModEffects {
    /// `effect:` rows by `.name`
    pub effects: HashMap<String, parser::DarkestRow>,
    /// Buff `stat_type` by buff id
    pub buffs: HashMap<String, String>,
}

impl ModEffects {
    pub fn is_empty(&self) -> bool {
        self.effects.is_empty() && self.buffs.is_empty()
    }
}

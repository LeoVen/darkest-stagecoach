//! The generated data as the frontend reads it: one `classes.json` with an
//! array of `ClassModData` (see `src/data/ClassMod.tsx`). Field names and
//! shapes must match the TS types.

use mod_parser::types::{ClassInfo, ClassResistances, ClassStats};
use serde::Serialize;

use crate::images::ImageStore;
use crate::uploaders::Uploaders;

#[derive(Serialize)]
#[serde(rename_all = "camelCase")]
pub struct ClassModData {
    key: String,
    name: String,
    original_hero: bool,
    religious: bool,
    transform: bool,
    synergies: Vec<&'static str>,
    resistances: Resistances,
    stats: GearStats,
    sources: Vec<Source>,
    /// Who uploaded the workshop mod, if known
    #[serde(skip_serializing_if = "Option::is_none")]
    uploader: Option<Uploader>,
    skills: Vec<Skill>,
    equip: EquipIcons,
    portrait: String,
}

#[derive(Serialize)]
#[serde(rename_all = "camelCase")]
struct Resistances {
    stun: f32,
    blight: f32,
    bleed: f32,
    disease: f32,
    #[serde(rename = "move")]
    shuffle: f32,
    debuff: f32,
    death_blow: f32,
    trap: f32,
}

#[derive(Serialize)]
struct GearStats {
    armours: Vec<ArmourStats>,
    weapons: Vec<WeaponStats>,
}

#[derive(Serialize)]
struct ArmourStats {
    dodge: f32,
    prot: f32,
    hp: f32,
    speed: f32,
}

#[derive(Serialize)]
struct WeaponStats {
    accuracy: f32,
    damage: [f32; 2],
    crit: f32,
    speed: f32,
}

#[derive(Serialize)]
struct Source {
    name: String,
    link: String,
}

#[derive(Serialize)]
struct Uploader {
    name: String,
    link: String,
}

#[derive(Serialize)]
struct Skill {
    name: String,
    launch: [bool; 4],
    target: Target,
    image: String,
}

#[derive(Serialize)]
struct Target {
    targets: [bool; 4],
    mods: String,
}

#[derive(Serialize)]
struct EquipIcons {
    armour: Vec<String>,
    weapon: Vec<String>,
}

impl ClassModData {
    /// Converts a parsed class, saving its images into `images`
    pub fn new(class: ClassInfo, images: &mut ImageStore, uploaders: &Uploaders) -> Self {
        Self {
            sources: sources(&class.steam_id),
            uploader: uploaders.get(&class.steam_id).map(|u| Uploader {
                name: u.name.clone(),
                link: format!("https://steamcommunity.com/profiles/{}", u.steam_id),
            }),
            resistances: Resistances::from(&class.res),
            stats: GearStats::from(&class.stats),
            skills: class
                .skills
                .iter()
                .map(|skill| Skill {
                    name: skill.name.clone(),
                    launch: skill.launch.positions,
                    target: Target {
                        targets: skill.target.targets,
                        mods: skill.target.modifiers.clone(),
                    },
                    image: images.save(&skill.img),
                })
                .collect(),
            portrait: images.save(&class.portrait),
            equip: EquipIcons {
                armour: class.armour_icons.iter().map(|i| images.save(i)).collect(),
                weapon: class.weapon_icons.iter().map(|i| images.save(i)).collect(),
            },
            key: class.key,
            name: class.name,
            original_hero: class.original_hero,
            religious: class.religious,
            transform: class.transform,
            synergies: class.synergies.iter().map(|s| s.as_str()).collect(),
        }
    }
}

impl From<&ClassResistances> for Resistances {
    fn from(r: &ClassResistances) -> Self {
        Self {
            stun: r.stun,
            blight: r.blight,
            bleed: r.bleed,
            disease: r.disease,
            shuffle: r.shuffle,
            debuff: r.debuff,
            death_blow: r.death_blow,
            trap: r.trap,
        }
    }
}

impl From<&ClassStats> for GearStats {
    fn from(s: &ClassStats) -> Self {
        Self {
            armours: s
                .armour
                .iter()
                .map(|a| ArmourStats {
                    dodge: a.dodge,
                    prot: a.prot,
                    hp: a.hp,
                    speed: a.speed,
                })
                .collect(),
            weapons: s
                .weapon
                .iter()
                .map(|w| WeaponStats {
                    accuracy: w.accuracy,
                    damage: w.damage,
                    crit: w.crit,
                    speed: w.speed,
                })
                .collect(),
        }
    }
}

fn sources(steam_id: &str) -> Vec<Source> {
    if steam_id.is_empty() {
        return vec![];
    }
    vec![Source {
        name: "Steam".to_string(),
        link: format!("https://steamcommunity.com/sharedfiles/filedetails/?id={steam_id}"),
    }]
}

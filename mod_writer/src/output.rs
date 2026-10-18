//! The generated data as the frontend reads it: one `classes.json` with an
//! array of `ClassModData` (see `src/data/ClassMod.tsx`). Field names and
//! shapes must match the TS types.

use mod_parser::{
    credits::Credit,
    types::{ClassInfo, ClassResistances, ClassStats},
};
use serde::Serialize;

use crate::images::ImageStore;
use crate::uploaders::{Uploader, Uploaders};

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
    /// The credits of the workshop description and the uploader
    authors: Vec<Author>,
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

#[derive(Serialize, Debug, PartialEq)]
struct Author {
    name: String,
    credits: Vec<&'static str>,
    /// Steam profile
    #[serde(skip_serializing_if = "Option::is_none")]
    link: Option<String>,
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
            authors: authors(&class.credits, uploaders.get(&class.steam_id)),
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

/// The credited authors with the uploader marked (credited as "Me", or under
/// their Steam name), or added first if the credits don't name them
fn authors(credits: &[Credit], uploader: Option<&Uploader>) -> Vec<Author> {
    let uploader_link =
        uploader.map(|u| format!("https://steamcommunity.com/profiles/{}", u.steam_id));
    let mut result: Vec<Author> = vec![];
    let mut uploader_found = false;

    for credit in credits {
        let is_uploader = uploader
            .is_some_and(|u| credit.is_uploader || credit.name.eq_ignore_ascii_case(&u.name));
        let name = match uploader {
            Some(u) if credit.name.is_empty() => u.name.clone(),
            _ => credit.name.clone(),
        };
        if name.is_empty() {
            continue; // "Me", but the uploader is unknown
        }

        let mut author = Author {
            name,
            credits: credit.roles.clone(),
            link: credit.link.clone(),
        };
        if is_uploader {
            uploader_found = true;
            author.credits.push("Uploader");
            author.link = uploader_link.clone();
        }

        // "Me" and the uploader's name in the same credits
        match result
            .iter_mut()
            .find(|a| a.name.eq_ignore_ascii_case(&author.name))
        {
            Some(existing) => {
                for credit in author.credits {
                    if !existing.credits.contains(&credit) {
                        existing.credits.push(credit);
                    }
                }
                existing.link = existing.link.take().or(author.link);
            }
            None => result.push(author),
        }
    }

    if let Some(u) = uploader
        && !uploader_found
    {
        result.insert(
            0,
            Author {
                name: u.name.clone(),
                credits: vec!["Uploader"],
                link: uploader_link,
            },
        );
    }

    // Keep "Uploader" last
    for author in &mut result {
        author.credits.sort_by_key(|credit| *credit == "Uploader");
    }
    result
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

#[cfg(test)]
mod tests {
    use super::*;

    fn credit(name: &str, roles: &[&'static str], is_uploader: bool) -> Credit {
        Credit {
            name: name.to_string(),
            roles: roles.to_vec(),
            link: None,
            is_uploader,
        }
    }

    fn names(authors: &[Author]) -> Vec<(&str, Vec<&str>)> {
        authors
            .iter()
            .map(|a| (a.name.as_str(), a.credits.clone()))
            .collect()
    }

    #[test]
    fn marks_the_uploader_among_the_credits() {
        let uploader = Uploader {
            name: "Sahlo Qah".to_string(),
            steam_id: "765".to_string(),
        };
        let credits = [
            credit("", &["Scripting"], true),
            credit("Sahlo Qah", &["Writing"], false),
            credit("Hestrir", &["Art"], false),
        ];
        let authors = authors(&credits, Some(&uploader));

        assert_eq!(
            names(&authors),
            [
                ("Sahlo Qah", vec!["Scripting", "Writing", "Uploader"]),
                ("Hestrir", vec!["Art"])
            ]
        );
        assert_eq!(
            authors[0].link.as_deref(),
            Some("https://steamcommunity.com/profiles/765")
        );
    }

    #[test]
    fn adds_an_uncredited_uploader_first() {
        let uploader = Uploader {
            name: "Moon/Void Slime".to_string(),
            steam_id: "765".to_string(),
        };
        let credits = [credit("Void Slime", &["Scripting"], false)];

        assert_eq!(
            names(&authors(&credits, Some(&uploader))),
            [
                ("Moon/Void Slime", vec!["Uploader"]),
                ("Void Slime", vec!["Scripting"])
            ]
        );
        assert_eq!(names(&authors(&[credit("", &["Art"], true)], None)), []);
    }
}

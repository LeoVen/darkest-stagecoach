use mod_reader::types::{ClassModInfo, ModEffects, SkillData};

use crate::types::*;

pub mod credits;
pub mod synergy;
pub mod types;

/// `base` holds the base game's effects, which mods can apply too
pub fn proc_class_mod(info: ClassModInfo, base: &ModEffects) -> ClassInfo {
    let mut result = ClassInfo::default();

    result.key = info.key.clone();

    proc_infos(&info, &mut result);
    result.res = proc_resistances(&info);
    result.stats = proc_stats(&info);
    (result.religious, result.transform) = proc_tag(&info);
    result.synergies = synergy::proc_synergies(&info, base);
    result.credits = credits::parse_credits(&info.description);
    result.skills = proc_skills(&info.info, info.skills);

    result.portrait = info.portrait;
    result.steam_id = info.steam_id;
    result.armour_icons = info.equip_armour;
    result.weapon_icons = info.equip_weapon;

    result
}

/// Folder names of the base game and DLC heroes
const VANILLA_HEROES: [&str; 20] = [
    "abomination",
    "antiquarian",
    "bounty_hunter",
    "arbalest",
    "crusader",
    "grave_robber",
    "hellion",
    "highwayman",
    "flagellant",
    "houndmaster",
    "jester",
    "leper",
    "man_at_arms",
    "musketeer",
    "occultist",
    "plague_doctor",
    "shieldbreaker",
    "vestal",
    "duelist",
    "runaway",
];

/// Whether `key` (a hero folder name) is one of the vanilla heroes. Workshop
/// mods reusing such a folder name are reworks or reskins, not the originals.
pub fn is_vanilla_hero_key(key: &str) -> bool {
    VANILLA_HEROES.contains(&key)
}

// Proc any other info
pub fn proc_infos(info: &ClassModInfo, result: &mut ClassInfo) {
    let key = format!("hero_class_name_{}", info.key);
    if let Some(name) = info.locs.get(&key)
        && let Some(name) = name.first()
    {
        result.name = proc_name(name.clone());
    }

    // Some mods only ship compiled .loc2 files, which can't be read
    if result.name.is_empty() {
        result.name = name_from_key(&result.key);
        result.name_from_key = true;
    }

    // Only the base game and DLC heroes, which have no Steam ID
    result.original_hero = info.steam_id.is_empty() && is_vanilla_hero_key(&result.key);
}

pub fn proc_resistances(info: &ClassModInfo) -> ClassResistances {
    let mut result = ClassResistances::default();

    // Resistances
    if let Some(res) = info.info.iter().find(|(key, _)| key == "resistances") {
        for (key, values) in &res.1 {
            match &**key {
                "stun" => result.stun = parse_value(&values[0]),
                "poison" => result.blight = parse_value(&values[0]),
                "bleed" => result.bleed = parse_value(&values[0]),
                "disease" => result.disease = parse_value(&values[0]),
                "move" => result.shuffle = parse_value(&values[0]),
                "debuff" => result.debuff = parse_value(&values[0]),
                "death_blow" => result.death_blow = parse_value(&values[0]),
                "trap" => result.trap = parse_value(&values[0]),
                _ => {}
            }
        }
    }

    result
}

// TODO check for upgradeRequirementCode for the upgrade level instead of assuming that they are ordered
pub fn proc_stats(info: &ClassModInfo) -> ClassStats {
    let mut result = ClassStats::default();

    // Armour
    let filter = info.info.iter().filter(|(key, _)| key == "armour").take(5);
    for (i, (_, stats)) in filter.enumerate() {
        for (key, values) in stats {
            match &**key {
                "def" => result.armour[i].dodge = parse_value(&values[0]),
                "prot" => result.armour[i].prot = parse_value(&values[0]),
                "hp" => result.armour[i].hp = parse_value(&values[0]),
                "spd" => result.armour[i].speed = parse_value(&values[0]),
                _ => {}
            }
        }
    }

    // Weapon
    let filter = info.info.iter().filter(|(key, _)| key == "weapon").take(5);
    for (i, (_, stats)) in filter.enumerate() {
        for (key, values) in stats {
            match &**key {
                "atk" => result.weapon[i].accuracy = parse_value(&values[0]),
                "crit" => result.weapon[i].crit = parse_value(&values[0]),
                "spd" => result.weapon[i].speed = parse_value(&values[0]),
                "dmg" => {
                    result.weapon[i].damage[0] = parse_value(&values[0]);
                    result.weapon[i].damage[1] = parse_value(&values[1]);
                }
                _ => {}
            }
        }
    }

    result
}

pub fn proc_tag(info: &ClassModInfo) -> (bool, bool) {
    let mut religious = false;
    let transform = info.info.iter().filter(|(key, _)| key == "mode").count() > 0;

    for (_, map) in info.info.iter().filter(|(key, _)| key == "tag") {
        if let Some(id) = map.get("id") {
            match &*id[0] {
                "non-religious" => religious = false,
                "religious" => religious = true,
                _ => {}
            }
        }
    }

    (religious, transform)
}

// Edge case: skill list comes from art, but consider only those present in the
// info file since I happened to find mods with art entries of skills that don't
// exist.
pub fn proc_skills(info_file: &parser::DarkestFile, skill_data: Vec<SkillData>) -> Vec<SkillInfo> {
    let mut result = vec![];

    for skill in skill_data.into_iter() {
        // Find skill with "id"
        let row = info_file
            .iter()
            .filter(|(key, _)| key == "combat_skill")
            .find(|(_, map)| {
                if let Some(values) = map.get("id")
                    && let Some(value) = values.first()
                    && value == &skill.key
                {
                    return true;
                }
                false
            });

        if let Some(row) = row {
            result.push(SkillInfo {
                img: skill.img,
                name: proc_name(skill.name),
                launch: make_launch(&row.1),
                target: make_target(&row.1),
            })
        }
    }

    result
}

fn make_launch(row: &parser::DarkestRow) -> Launch {
    let mut result: Launch = Default::default();
    if let Some(launch) = row.get("launch") {
        let nums = &*launch[0];
        for c in nums.chars() {
            match c {
                '1' => result.positions[0] = true,
                '2' => result.positions[1] = true,
                '3' => result.positions[2] = true,
                '4' => result.positions[3] = true,
                _ => {}
            }
        }
    }
    result
}

fn make_target(map: &parser::DarkestRow) -> Target {
    let mut result: Target = Default::default();
    if let Some(launch) = map.get("target") {
        let nums = &*launch[0];
        for c in nums.chars() {
            match c {
                '1' => result.targets[0] = true,
                '2' => result.targets[1] = true,
                '3' => result.targets[2] = true,
                '4' => result.targets[3] = true,
                '@' => result.modifiers.push(c),
                '?' => result.modifiers.push(c),
                '~' => result.modifiers.push(c),
                _ => {}
            }
        }
    }
    result
}

fn parse_value(val: &str) -> f32 {
    if val.is_empty() {
        return 9999.0;
    }

    // Transform % values
    let (val, div) = match val.strip_suffix('%') {
        Some(val) => (val, 100.0),
        None => (val, 1.0),
    };

    match val.parse::<f32>() {
        Ok(value) => value / div,
        Err(_) => {
            eprintln!("\nWarning: expected a number but got {:?}, using 0", val);
            0.0
        }
    }
}

// e.g. "man_at_arms" -> "Man At Arms"
fn name_from_key(key: &str) -> String {
    key.split('_')
        .filter(|word| !word.is_empty())
        .map(|word| {
            let mut chars = word.chars();
            match chars.next() {
                Some(first) => first.to_uppercase().chain(chars).collect(),
                None => String::new(),
            }
        })
        .collect::<Vec<String>>()
        .join(" ")
}

// Removes `{...}` color tags from localized names
fn proc_name(name: String) -> String {
    let mut result = name;

    while let Some(start) = result.find('{') {
        let Some(end) = result[start..].find('}') else {
            break;
        };
        result.replace_range(start..=start + end, "");
    }

    result
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn parses_values() {
        assert_eq!(parse_value("4"), 4.0);
        assert_eq!(parse_value("7.5%"), 0.075);
        assert_eq!(parse_value(".25"), 0.25);
        assert_eq!(parse_value("1."), 1.0);
    }

    #[test]
    fn strips_name_tags() {
        assert_eq!(
            proc_name("{colour_start|x}Vestal{colour_end}".into()),
            "Vestal"
        );
        assert_eq!(proc_name("Plain".into()), "Plain");
        assert_eq!(proc_name("Open {tag".into()), "Open {tag");
    }

    #[test]
    fn names_from_key() {
        assert_eq!(name_from_key("lamia"), "Lamia");
        assert_eq!(name_from_key("man_at_arms"), "Man At Arms");
    }

    #[test]
    fn only_vanilla_heroes_are_original() {
        let original = |key: &str, steam_id: &str| {
            let info = ClassModInfo {
                key: key.into(),
                steam_id: steam_id.into(),
                ..Default::default()
            };
            let mut result = ClassInfo {
                key: key.into(),
                ..Default::default()
            };
            proc_infos(&info, &mut result);
            result.original_hero
        };

        assert!(original("shieldbreaker", ""));
        assert!(!original("shieldbreaker", "2495332714"));
        assert!(!original("lamia", ""));
    }

    #[test]
    fn maps_stun_resistance() {
        let info = ClassModInfo {
            info: parser::parse_darkest(
                "resistances: .stun 30% .poison 40% .bleed 50%".to_string(),
            ),
            ..Default::default()
        };
        let res = proc_resistances(&info);
        assert_eq!(res.stun, 0.3);
        assert_eq!(res.blight, 0.4);
        assert_eq!(res.bleed, 0.5);
    }
}

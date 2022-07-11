use std::collections::HashSet;

use mod_reader::types::{ClassModInfo, SkillData};

use crate::types::*;

pub mod types;

pub fn proc_class_mod(info: ClassModInfo) -> ClassInfo {
    let mut result = ClassInfo::default();

    result.key = info.key.clone();

    proc_infos(&info, &mut result);
    result.res = proc_resistances(&info);
    result.stats = proc_stats(&info);
    (result.religious, result.transform) = proc_tag(&info);
    result.skills = proc_skills(&info.info, info.skills);

    result.portrait = info.portrait;
    result.guild = info.guild;
    result.steam_id = info.steam_id;
    result.armour_icons = info.equip_armour;
    result.weapon_icons = info.equip_weapon;

    return result;
}

// Proc any other info
pub fn proc_infos(info: &ClassModInfo, result: &mut ClassInfo) {
    let original_heroes = HashSet::from([
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
    ]);

    let key = format!("hero_class_name_{}", info.key);
    if let Some(name) = info.locs.get(&key) {
        if let Some(name) = name.get(0) {
            result.name = proc_name(name.clone());
        }
    }

    result.original_hero = original_heroes.contains(result.key.as_str());
}

pub fn proc_resistances(info: &ClassModInfo) -> ClassResistances {
    let mut result = ClassResistances::default();

    // Resistances
    if let Some(res) = info.info.iter().find(|(key, _)| key == "resistances") {
        for (key, values) in &res.1 {
            match &**key {
                "stun" => result.blight = parse_value(&values[0]),
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
    let filter = info.info.iter().filter(|(key, _)| key == "armour");
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
    let filter = info.info.iter().filter(|(key, _)| key == "weapon");
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
                if let Some(values) = map.get("id") {
                    if let Some(value) = values.get(0) {
                        if value == &skill.key {
                            return true;
                        }
                    }
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

    return result;
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

fn parse_value(mut val: &str) -> f32 {
    let mut div = 1.0;

    // TODO maybe this gets fixed once the parser is fixed
    if val.len() == 0 {
        return 9999.0;
    }

    // TODO this is currently not possible because of the parser's limitation
    // Something like ".1" indicating "0.1"
    if val.starts_with(".") {
        val = &val.strip_prefix(".").unwrap();
        div *= 10.0;
    }

    // Transform % values
    if val.ends_with('%') {
        val = &val.strip_suffix("%").unwrap();
        div *= 100.0;
    }

    val.parse::<f32>().expect(&format!("f32 but got {}!", val)) / div
}

fn proc_name(name: String) -> String {
    let mut result = name;

    loop {
        if let Some(start) = result.find('{') {
            if let Some(end) = result.find('}') {
                let mut fixed = result[..start].to_string();
                if end + 1 != result.len() {
                    fixed += &result[end + 1..];
                }
                result = fixed;
            } else {
                break;
            }
        } else {
            break;
        }
    }

    result
}

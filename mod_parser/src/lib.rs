use mod_reader::types::ClassModInfo;

use crate::types::*;

pub mod types;

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

pub fn parse_value(val: &str) -> f32 {
    if val.ends_with('%') {
        val.strip_suffix('%')
            .unwrap()
            .parse::<f32>()
            .unwrap_or(9999.0)
            / 100.0
    } else {
        val.parse::<f32>().unwrap_or(99.0)
    }
}

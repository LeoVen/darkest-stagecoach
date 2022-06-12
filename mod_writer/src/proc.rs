use mod_reader::types::ClassModInfo;
use parser::types::{ClassResistances, ClassStats};

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
                _ => {
                    println!("found unmatched: {}", key);
                }
            }
        }
    }

    result
}

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
                _ => {
                    println!("found unmatched: {}", key);
                }
            }
        }
    }

    // Weapon
    let filter = info.info.iter().filter(|(key, _)| key == "weapon");
    for (i, (_, stats)) in filter.enumerate() {
        for (key, values) in stats {
            match &**key {
                // .atk 0% .dmg 6 11 .crit 2% .spd 7
                "atk" => result.weapon[i].accuracy = parse_value(&values[0]),
                "crit" => result.weapon[i].crit = parse_value(&values[0]),
                "spd" => result.weapon[i].speed = parse_value(&values[0]),
                "dmg" => {
                    result.weapon[i].damage[0] = parse_value(&values[0]);
                    result.weapon[i].damage[1] = parse_value(&values[1]);
                }
                _ => {
                    println!("found unmatched: {}", key);
                }
            }
        }
    }

    result
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

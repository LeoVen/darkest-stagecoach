use std::path::PathBuf;

use lazy_static::lazy_static;
use regex::Regex;

use crate::types::*;
use crate::utils::parse_value;

pub async fn get_contents(path: PathBuf, data: String) -> Option<ClassInfo> {
    let mut result = ClassInfo::default();
    result.file_name = path
        .file_name()
        .unwrap_or_default()
        .to_str()
        .unwrap_or_default()
        .to_string();
    result.name = file_to_name(&result.file_name);
    if result.file_name == String::default() {
        result.failed = true;
        return Some(result);
    }
    result.steam_id = get_steam_id(path.to_str().unwrap_or_default().to_string());
    result = resistances(result, &data)?;
    result = gears(result, &data)?;
    Some(result)
}

lazy_static! {
    static ref RE_RESIST: Regex = Regex::new(r"resistances: (.+)\n*").unwrap();
}

fn resistances(mut result: ClassInfo, data: &str) -> Option<ClassInfo> {
    for cap in RE_RESIST.captures_iter(data) {
        // .stun 40% .poison 20% .bleed 30% .disease 30% .move 40% .debuff 40% .death_blow 67% .trap 20%
        let values = &cap[1];
        let mut keys = vec![];
        let mut vals = vec![];
        for (i, split) in values.split(' ').into_iter().enumerate() {
            if i % 2 == 0 {
                keys.push(split);
            } else if split.ends_with('\r') {
                vals.push(split.strip_suffix('\r').unwrap());
            } else {
                vals.push(split);
            }
        }
        if keys.len() != vals.len() {
            // ??
            return None;
        }
        for (key, val) in keys.into_iter().zip(vals) {
            match key {
                ".stun" => result.res.stun = parse_value(val),
                ".poison" => result.res.blight = parse_value(val),
                ".bleed" => result.res.bleed = parse_value(val),
                ".disease" => result.res.disease = parse_value(val),
                ".move" => result.res.shuffle = parse_value(val),
                ".debuff" => result.res.debuff = parse_value(val),
                ".death_blow" => result.res.death_blow = parse_value(val),
                ".trap" => result.res.trap = parse_value(val),
                _ => {}
            }
        }
    }
    Some(result)
}

lazy_static! {
    static ref RE_WEAPON: Regex = Regex::new(r"weapon: .name .+? (\..+)\n*").unwrap();
    static ref RE_ARMOUR: Regex = Regex::new(r"armour: .name .+? (\..+)\n*").unwrap();
}

pub fn gears(mut result: ClassInfo, data: &str) -> Option<ClassInfo> {
    for (i, cap) in RE_WEAPON.captures_iter(data).enumerate() {
        // .atk 0% .dmg 8 12 .crit 0% .spd 7
        let values = &cap[1]
            .split(".upgradeRequirementCode")
            .next()
            .unwrap()
            .trim();
        let mut count = 0;
        for (j, split) in values.split_whitespace().enumerate() {
            match j {
                1 => result.stats.weapon[i].accuracy = parse_value(split),
                3 => result.stats.weapon[i].damage[0] = parse_value(split),
                4 => result.stats.weapon[i].damage[1] = parse_value(split),
                6 => result.stats.weapon[i].crit = parse_value(split),
                8 => result.stats.weapon[i].speed = parse_value(split),
                _ => {}
            }
            count += 1;
        }
        if count != 9 {
            return None;
        }
    }
    for (i, cap) in RE_ARMOUR.captures_iter(data).enumerate() {
        // .def 10% .prot 0 .hp 23 .spd 0
        let values = &cap[1]
            .split(".upgradeRequirementCode")
            .next()
            .unwrap()
            .trim();
        let mut count = 0;
        for (j, split) in values.split_whitespace().enumerate() {
            match j {
                1 => result.stats.armour[i].dodge = parse_value(split),
                3 => result.stats.armour[i].prot = parse_value(split),
                5 => result.stats.armour[i].hp = parse_value(split),
                7 => result.stats.armour[i].speed = parse_value(split),
                _ => {}
            }
            count += 1;
        }
        if count != 8 {
            return None;
        }
    }
    Some(result)
}

lazy_static! {
    static ref RE_STEAM_ID: Regex = Regex::new(r"262060/(\d+)/").unwrap();
}

fn get_steam_id(mut path: String) -> String {
    // C:\Program Files (x86)\Steam\steamapps\workshop\content\262060\2472629364\heroes\commandant
    path = path.replace('\\', "/");
    for cap in RE_STEAM_ID.captures_iter(&path) {
        if cap.len() > 1 {
            return cap[1].to_string();
        }
    }
    Default::default()
}

fn file_to_name(file_name: &str) -> String {
    let file = file_name.split('.').next();
    if file.is_none() || file_name.is_empty() {
        return Default::default();
    }
    file.unwrap()
        .split('_')
        .map(|v| {
            v.chars()
                .next()
                .unwrap()
                .to_uppercase()
                .chain(v[1..].chars())
                .collect::<String>()
        })
        .collect::<Vec<String>>()
        .concat()
}

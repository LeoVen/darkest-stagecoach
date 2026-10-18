use std::path::{Path, PathBuf};

use crate::types::ModEffects;

/// Reads every `*.effects.darkest` and `*.buffs.json` below `mod_root`. The
/// game only loads them from `effects/` and `shared/buffs/`, but mods ship
/// copies elsewhere too, so the whole folder is searched. Files are read in
/// sorted order and the first definition of a name wins.
pub fn read_effects(mod_root: &Path) -> ModEffects {
    let mut effect_files = vec![];
    let mut buff_files = vec![];
    collect_files(mod_root, &mut effect_files, &mut buff_files);
    effect_files.sort();
    buff_files.sort();

    let mut result = ModEffects::default();

    for file in effect_files {
        let Ok(data) = std::fs::read(&file) else {
            continue;
        };
        let data = String::from_utf8_lossy(&data).into_owned();
        for (key, row) in parser::parse_darkest(data) {
            if key != "effect" {
                continue;
            }
            if let Some(name) = row.get("name").and_then(|name| name.first()) {
                let name = name.clone();
                result.effects.entry(name).or_insert(row);
            }
        }
    }

    for file in buff_files {
        if let Ok(data) = std::fs::read(&file) {
            parse_buffs(&String::from_utf8_lossy(&data), &mut result.buffs);
        }
    }

    result
}

fn collect_files(dir: &Path, effects: &mut Vec<PathBuf>, buffs: &mut Vec<PathBuf>) {
    let Ok(entries) = std::fs::read_dir(dir) else {
        return;
    };

    for entry in entries.flatten() {
        let path = entry.path();
        let Ok(file_type) = entry.file_type() else {
            continue;
        };
        if file_type.is_dir() {
            collect_files(&path, effects, buffs);
        } else if let Some(name) = path.file_name().and_then(|name| name.to_str()) {
            if name.ends_with(".effects.darkest") {
                effects.push(path);
            } else if name.ends_with(".buffs.json") {
                buffs.push(path);
            }
        }
    }
}

/// Collects the `stat_type` of each buff `id`. Hand-written buff files are
/// often not valid JSON (trailing commas, comments), so instead of parsing
/// them this pairs each `"stat_type"` with the `"id"` before it.
fn parse_buffs(data: &str, buffs: &mut std::collections::HashMap<String, String>) {
    let mut id: Option<&str> = None;
    let mut strings = json_strings(data);

    while let Some(key) = strings.next() {
        match key {
            "id" => id = strings.next(),
            "stat_type" => {
                if let (Some(id), Some(stat_type)) = (id.take(), strings.next()) {
                    buffs
                        .entry(id.to_string())
                        .or_insert_with(|| stat_type.to_string());
                }
            }
            _ => {}
        }
    }
}

// The contents of all double-quoted strings, in order (no escapes in buff files)
fn json_strings(data: &str) -> impl Iterator<Item = &str> {
    data.split('"').skip(1).step_by(2)
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn pairs_buff_ids_with_stat_types() {
        let mut buffs = Default::default();
        parse_buffs(
            r#"{ "buffs": [
                { "id" : "mirror", "stat_type" : "damage_reflect_percent", "amount" : 0.1, },
                { "id": "slow", "stat_type": "combat_stat_add", "rule_data": { "string": "" } }
            ] }"#,
            &mut buffs,
        );
        assert_eq!(buffs["mirror"], "damage_reflect_percent");
        assert_eq!(buffs["slow"], "combat_stat_add");
        assert_eq!(buffs.len(), 2);
    }
}

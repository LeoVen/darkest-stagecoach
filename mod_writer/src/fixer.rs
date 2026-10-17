use std::collections::HashSet;

use mod_parser::types::ClassInfo;

/// Gives every class a key that doesn't depend on which other mods are
/// present, so hand-written info (`src/data/info/Class_<key>.tsx`) stays
/// attached to the right class:
/// - base game and DLC heroes: their folder name (`vestal`)
/// - workshop mods: folder name and Steam ID (`lamia_1130829365`)
///
/// `-` is replaced with `_` so keys are valid TS identifiers. If the same mod
/// is found twice (e.g. in two input folders), later copies get a counter.
pub fn fix_classes(mut input: Vec<ClassInfo>) -> Vec<ClassInfo> {
    let mut seen = HashSet::new();

    for class in input.iter_mut() {
        let mut key = class.key.replace('-', "_");
        if !class.steam_id.is_empty() {
            key = format!("{}_{}", key, class.steam_id);
        }

        let base = key.clone();
        let mut n = 2;
        while !seen.insert(key.clone()) {
            key = format!("{}_{}", base, n);
            n += 1;
        }
        if key != base {
            eprintln!("Duplicate class {}, using key {}", base, key);
        }

        class.key = key;
    }

    input
}

#[cfg(test)]
mod tests {
    use super::*;

    fn class(key: &str, steam_id: &str) -> ClassInfo {
        ClassInfo {
            key: key.to_string(),
            steam_id: steam_id.to_string(),
            ..Default::default()
        }
    }

    #[test]
    fn keys_depend_only_on_the_mod_itself() {
        let keys: Vec<String> = fix_classes(vec![
            class("musketeer", ""),
            class("musketeer", "1624470590"),
            class("witcher", "123"),
            class("witcher", "456"),
            class("dark-knight", "789"),
            class("witcher", "456"),
        ])
        .into_iter()
        .map(|c| c.key)
        .collect();

        assert_eq!(
            keys,
            [
                "musketeer",
                "musketeer_1624470590",
                "witcher_123",
                "witcher_456",
                "dark_knight_789",
                "witcher_456_2"
            ]
        );
    }
}

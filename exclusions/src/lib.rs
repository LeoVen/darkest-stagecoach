//! The repo's `exclusions.json`: workshop mods and classes left out of the
//! catalog (legacy re-uploads, broken mods, ...). Read by `workshop_fetch`
//! (not fetched or downloaded) and `mod_writer` (not generated).

use std::{collections::HashSet, path::Path};

use serde::Deserialize;

#[derive(Debug, Default, Deserialize)]
#[serde(default)]
pub struct Exclusions {
    /// Drop workshop classes whose folder name is a vanilla hero
    /// (`vestal`, `musketeer`, ...), i.e. reworks of the original heroes.
    /// Only the generator can apply this, since it needs the mod's files.
    pub exclude_vanilla_reworks: bool,
    /// Workshop mods by Steam ID
    pub mods: Vec<Entry>,
    /// Single classes by key (e.g. one class of a bundle mod)
    pub classes: Vec<Entry>,
    #[serde(skip)]
    mod_ids: HashSet<String>,
    #[serde(skip)]
    class_keys: HashSet<String>,
}

#[derive(Debug, Deserialize)]
pub struct Entry {
    pub id: String,
    /// Why it's excluded, for whoever reads the file
    #[serde(default)]
    pub reason: String,
}

impl Exclusions {
    /// Reads the file; a missing file means nothing is excluded
    pub fn read(path: &Path) -> anyhow::Result<Self> {
        let mut exclusions: Self = match std::fs::read_to_string(path) {
            Ok(text) => serde_json::from_str(&text)
                .map_err(|e| anyhow::anyhow!("invalid {}: {}", path.display(), e))?,
            Err(e) if e.kind() == std::io::ErrorKind::NotFound => Self::default(),
            Err(e) => return Err(e.into()),
        };
        exclusions.mod_ids = exclusions.mods.iter().map(|e| e.id.clone()).collect();
        exclusions.class_keys = exclusions.classes.iter().map(|e| e.id.clone()).collect();
        Ok(exclusions)
    }

    pub fn excludes_mod(&self, steam_id: &str) -> bool {
        self.mod_ids.contains(steam_id)
    }

    pub fn excludes_class(&self, key: &str) -> bool {
        self.class_keys.contains(key)
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn reads_entries_and_defaults() {
        let dir = std::env::temp_dir().join(format!("exclusions-test-{}", std::process::id()));
        std::fs::create_dir_all(&dir).unwrap();
        let path = dir.join("exclusions.json");
        std::fs::write(
            &path,
            r#"{"exclude_vanilla_reworks": true,
                "mods": [{"id": "123", "reason": "legacy"}],
                "classes": [{"id": "lamia_456"}]}"#,
        )
        .unwrap();

        let e = Exclusions::read(&path).unwrap();
        assert!(e.exclude_vanilla_reworks);
        assert!(e.excludes_mod("123") && !e.excludes_mod("456"));
        assert!(e.excludes_class("lamia_456"));

        let missing = Exclusions::read(&dir.join("nope.json")).unwrap();
        assert!(!missing.exclude_vanilla_reworks && !missing.excludes_mod("123"));
        std::fs::remove_dir_all(dir).unwrap();
    }
}

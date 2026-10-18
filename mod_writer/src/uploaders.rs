//! Who uploaded each workshop mod, from the `mods.json` manifest that
//! `workshop_fetch` writes (and fills with the creators' display names).

use std::{collections::HashMap, path::Path};

use serde::Deserialize;

pub struct Uploader {
    pub name: String,
    /// 64-bit Steam ID
    pub steam_id: String,
}

/// Uploaders by workshop mod ID
#[derive(Default)]
pub struct Uploaders(HashMap<String, Uploader>);

#[derive(Deserialize)]
struct Manifest {
    mods: Vec<ModEntry>,
}

#[derive(Deserialize)]
struct ModEntry {
    id: String,
    creator: String,
    #[serde(default)]
    creator_name: String,
}

impl Uploaders {
    pub fn read(path: &Path) -> Result<Self, String> {
        let data = std::fs::read_to_string(path)
            .map_err(|e| format!("failed to read {}: {}", path.display(), e))?;
        let manifest: Manifest = serde_json::from_str(&data)
            .map_err(|e| format!("failed to parse {}: {}", path.display(), e))?;
        Ok(Self::from_entries(manifest.mods))
    }

    // Mods without a known creator name are left out
    fn from_entries(mods: Vec<ModEntry>) -> Self {
        Self(
            mods.into_iter()
                .filter(|m| !m.creator.is_empty() && !m.creator_name.is_empty())
                .map(|m| {
                    let uploader = Uploader {
                        name: m.creator_name,
                        steam_id: m.creator,
                    };
                    (m.id, uploader)
                })
                .collect(),
        )
    }

    /// The uploader of the workshop mod `mod_id` (empty for base game heroes)
    pub fn get(&self, mod_id: &str) -> Option<&Uploader> {
        self.0.get(mod_id)
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn skips_mods_without_creator_name() {
        let manifest: Manifest = serde_json::from_str(
            r#"{ "tag_filter": true, "mods": [
                { "id": "1", "title": "A", "creator": "765", "creator_name": "MoonKanin" },
                { "id": "2", "title": "B", "creator": "766" }
            ] }"#,
        )
        .unwrap();
        let uploaders = Uploaders::from_entries(manifest.mods);

        let uploader = uploaders.get("1").unwrap();
        assert_eq!(uploader.name, "MoonKanin");
        assert_eq!(uploader.steam_id, "765");
        assert!(uploaders.get("2").is_none());
        assert!(uploaders.get("").is_none());
    }
}

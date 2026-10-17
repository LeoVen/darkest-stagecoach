use std::path::Path;

use serde::{Deserialize, Serialize};

use crate::steam::Item;

/// Tags hero mods commonly use (compared case-insensitively). They're free
/// text, so this is only a pre-filter: the generator still checks for a
/// `heroes/<name>/<name>.info.darkest` folder after downloading.
pub const HERO_TAGS: &[&str] = &[
    "new class",
    "class mod",
    "class",
    "classes",
    "character mod",
    "new character",
    "hero",
    "new hero",
];

pub fn has_hero_tag(item: &Item) -> bool {
    item.tags.iter().any(|tag| {
        HERO_TAGS
            .iter()
            .any(|hero| tag.tag.trim().eq_ignore_ascii_case(hero))
    })
}

/// The committed list of mods to download. Subscription counts are left out
/// on purpose: they change all the time and would make every run a diff.
#[derive(Debug, Default, Serialize, Deserialize)]
pub struct Manifest {
    pub min_lifetime_subscriptions: u64,
    pub tag_filter: bool,
    pub mods: Vec<ModEntry>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ModEntry {
    pub id: String,
    pub title: String,
    pub creator: String,
    pub time_updated: u64,
    pub tags: Vec<String>,
}

impl From<&Item> for ModEntry {
    fn from(item: &Item) -> Self {
        let mut tags: Vec<String> = item.tags.iter().map(|t| t.tag.clone()).collect();
        tags.sort();
        Self {
            id: item.publishedfileid.clone(),
            title: item.title.trim().to_string(),
            creator: item.creator.clone(),
            time_updated: item.time_updated,
            tags,
        }
    }
}

impl Manifest {
    pub fn new(min_lifetime_subscriptions: u64, tag_filter: bool, items: &[Item]) -> Self {
        let mut mods: Vec<ModEntry> = items
            .iter()
            .filter(|item| !tag_filter || has_hero_tag(item))
            .map(ModEntry::from)
            .collect();
        // Numeric order, so new uploads (higher IDs) are appended
        mods.sort_by_key(|m| (m.id.len(), m.id.clone()));
        mods.dedup_by(|a, b| a.id == b.id);

        Self {
            min_lifetime_subscriptions,
            tag_filter,
            mods,
        }
    }

    pub fn read(path: &Path) -> anyhow::Result<Self> {
        Ok(serde_json::from_str(&std::fs::read_to_string(path)?)?)
    }

    pub fn write(&self, path: &Path) -> anyhow::Result<()> {
        std::fs::write(path, serde_json::to_string_pretty(self)? + "\n")?;
        Ok(())
    }

    /// SteamCMD commands downloading every mod, for `steamcmd +login <user>
    /// +runscript <file> +quit`
    pub fn steamcmd_script(&self) -> String {
        self.mods
            .iter()
            .map(|m| format!("workshop_download_item {} {}\n", crate::steam::APP_ID, m.id))
            .collect()
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::steam::Tag;

    fn item(id: &str, tags: &[&str]) -> Item {
        Item {
            publishedfileid: id.to_string(),
            tags: tags.iter().map(|t| Tag { tag: t.to_string() }).collect(),
            ..Default::default()
        }
    }

    #[test]
    fn filters_by_hero_tags_case_insensitively() {
        let items = [
            item("300", &["New Class"]),
            item("20", &["character mod", "Healer"]),
            item("1000", &["skins"]),
            item("4000", &[]),
            item("300", &["New Class"]),
        ];

        let ids = |m: Manifest| m.mods.into_iter().map(|m| m.id).collect::<Vec<_>>();
        assert_eq!(ids(Manifest::new(0, true, &items)), ["20", "300"]);
        assert_eq!(
            ids(Manifest::new(0, false, &items)),
            ["20", "300", "1000", "4000"]
        );
    }

    #[test]
    fn writes_steamcmd_script() {
        let manifest = Manifest::new(0, false, &[item("2", &[]), item("1", &[])]);
        assert_eq!(
            manifest.steamcmd_script(),
            "workshop_download_item 262060 1\nworkshop_download_item 262060 2\n"
        );
    }
}

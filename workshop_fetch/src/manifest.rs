use std::{
    collections::{HashMap, HashSet},
    path::Path,
};

use exclusions::Exclusions;
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

/// The committed list of mods to download. It grows with every query (see
/// `merge`). Subscription counts are left out on purpose: they change all the
/// time and would make every run a diff.
#[derive(Debug, Default, Serialize, Deserialize)]
pub struct Manifest {
    pub mods: Vec<ModEntry>,
}

#[derive(Debug, Clone, PartialEq, Serialize, Deserialize)]
pub struct ModEntry {
    pub id: String,
    pub title: String,
    pub creator: String,
    /// The creator's Steam display name, refreshed by `set_creator_names`
    #[serde(default)]
    pub creator_name: String,
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
            creator_name: String::new(),
            time_updated: item.time_updated,
            tags,
        }
    }
}

/// What a `merge` changed
#[derive(Debug, Default)]
pub struct MergeResult {
    pub added: Vec<ModEntry>,
    pub updated: usize,
}

impl Manifest {
    /// Adds the queried items (those with a hero tag, unless `tag_filter` is
    /// off) that aren't in the manifest yet, and refreshes the metadata of
    /// those that are. Never removes anything, so different queries add up.
    pub fn merge(&mut self, items: &[Item], tag_filter: bool) -> MergeResult {
        let mut result = MergeResult::default();

        for item in items
            .iter()
            .filter(|item| !tag_filter || has_hero_tag(item))
        {
            let mut entry = ModEntry::from(item);
            match self.mods.iter_mut().find(|m| m.id == entry.id) {
                // Items don't carry the name, so keep the known one
                Some(existing) if existing.creator == entry.creator => {
                    entry.creator_name = existing.creator_name.clone();
                    if *existing != entry {
                        *existing = entry;
                        result.updated += 1;
                    }
                }
                Some(existing) if *existing != entry => {
                    *existing = entry;
                    result.updated += 1;
                }
                Some(_) => {}
                None => {
                    self.mods.push(entry.clone());
                    result.added.push(entry);
                }
            }
        }

        // Numeric order, so new uploads (higher IDs) end up at the bottom
        self.mods.sort_by_key(|m| (m.id.len(), m.id.clone()));
        result
    }

    /// The distinct creator Steam IDs, sorted
    pub fn creators(&self) -> Vec<String> {
        let creators: std::collections::BTreeSet<&str> =
            self.mods.iter().map(|m| m.creator.as_str()).collect();
        creators.into_iter().map(String::from).collect()
    }

    /// Sets `creator_name` from `names` (by creator Steam ID), keeping the
    /// old name of creators missing from it. Returns how many changed.
    pub fn set_creator_names(&mut self, names: &HashMap<String, String>) -> usize {
        let mut changed = 0;
        for m in &mut self.mods {
            if let Some(name) = names.get(&m.creator)
                && *name != m.creator_name
            {
                m.creator_name = name.clone();
                changed += 1;
            }
        }
        changed
    }

    /// Removes the excluded mods and returns them
    pub fn remove_excluded(&mut self, exclusions: &Exclusions) -> Vec<ModEntry> {
        let (removed, kept) = std::mem::take(&mut self.mods)
            .into_iter()
            .partition(|m| exclusions.excludes_mod(&m.id));
        self.mods = kept;
        removed
    }

    pub fn read(path: &Path) -> anyhow::Result<Self> {
        Ok(serde_json::from_str(&std::fs::read_to_string(path)?)?)
    }

    pub fn write(&self, path: &Path) -> anyhow::Result<()> {
        std::fs::write(path, serde_json::to_string_pretty(self)? + "\n")?;
        Ok(())
    }

    /// Mods whose ID isn't in `present` (e.g. already downloaded), in
    /// manifest order
    pub fn missing<'a>(
        &'a self,
        present: &'a HashSet<String>,
    ) -> impl Iterator<Item = &'a ModEntry> {
        self.mods.iter().filter(|m| !present.contains(&m.id))
    }
}

/// SteamCMD commands downloading `mods`, for `steamcmd +login <user>
/// +runscript <file> +quit`
pub fn steamcmd_script<'a>(mods: impl IntoIterator<Item = &'a ModEntry>) -> String {
    mods.into_iter()
        .map(|m| format!("workshop_download_item {} {}\n", crate::steam::APP_ID, m.id))
        .collect()
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

        let ids = |tag_filter| {
            let mut manifest = Manifest::default();
            manifest.merge(&items, tag_filter);
            manifest.mods.into_iter().map(|m| m.id).collect::<Vec<_>>()
        };
        assert_eq!(ids(true), ["20", "300"]);
        assert_eq!(ids(false), ["20", "300", "1000", "4000"]);
    }

    #[test]
    fn merges_queries_without_removing_mods() {
        let mut manifest = Manifest::default();
        manifest.merge(&[item("2", &["New Class"]), item("5", &["Hero"])], true);

        let mut renamed = item("5", &["Hero"]);
        renamed.title = "Renamed".to_string();
        let result = manifest.merge(&[item("9", &["class mod"]), renamed], true);

        let ids: Vec<&str> = manifest.mods.iter().map(|m| m.id.as_str()).collect();
        assert_eq!(ids, ["2", "5", "9"]);
        assert_eq!(result.added.len(), 1);
        assert_eq!(result.updated, 1);
        assert_eq!(manifest.mods[1].title, "Renamed");
    }

    #[test]
    fn keeps_creator_names_across_merges() {
        let mut uploaded = item("5", &["Hero"]);
        uploaded.creator = "765".to_string();
        let mut manifest = Manifest::default();
        manifest.merge(std::slice::from_ref(&uploaded), true);

        let names = HashMap::from([("765".to_string(), "MoonKanin".to_string())]);
        assert_eq!(manifest.set_creator_names(&names), 1);
        assert_eq!(manifest.set_creator_names(&names), 0);

        let result = manifest.merge(&[uploaded], true);
        assert_eq!(result.updated, 0);
        assert_eq!(manifest.mods[0].creator_name, "MoonKanin");
        assert_eq!(manifest.creators(), ["765"]);
    }

    #[test]
    fn writes_steamcmd_script_for_missing_mods() {
        let mut manifest = Manifest::default();
        manifest.merge(&[item("3", &[]), item("2", &[]), item("1", &[])], false);
        let present = HashSet::from(["2".to_string()]);

        assert_eq!(
            steamcmd_script(manifest.missing(&present)),
            "workshop_download_item 262060 1\nworkshop_download_item 262060 3\n"
        );
        assert_eq!(
            steamcmd_script(manifest.missing(&present).take(1)),
            "workshop_download_item 262060 1\n"
        );
    }
}

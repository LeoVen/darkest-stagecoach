//! `incomplete.json`: generated classes with missing data, to look into later

use mod_parser::types::ClassInfo;
use serde::Serialize;

#[derive(Serialize)]
#[serde(rename_all = "camelCase")]
pub struct Incomplete {
    key: String,
    name: String,
    #[serde(skip_serializing_if = "Option::is_none")]
    link: Option<String>,
    issues: Vec<String>,
}

/// What's missing from a class, or None if it's complete
pub fn incomplete(class: &ClassInfo) -> Option<Incomplete> {
    let mut issues = vec![];

    if class.name_from_key {
        issues.push("no localized name, derived from the folder name".to_string());
    }
    if class.portrait.is_empty() {
        issues.push("no portrait".to_string());
    }
    if class.skills.is_empty() {
        issues.push("no skills".to_string());
    }
    let count = |n: usize, what: &str| {
        (n > 0).then(|| format!("{} of {} skills without {}", n, class.skills.len(), what))
    };
    issues.extend(count(
        class
            .skills
            .iter()
            .filter(|s| s.name.trim().is_empty())
            .count(),
        "a name",
    ));
    issues.extend(count(
        class.skills.iter().filter(|s| s.img.is_empty()).count(),
        "an icon",
    ));
    let icons = class.armour_icons.iter().chain(&class.weapon_icons);
    let missing_icons = icons.filter(|icon| icon.is_empty()).count();
    if missing_icons > 0 {
        issues.push(format!("{} of 10 equipment icons missing", missing_icons));
    }

    if issues.is_empty() {
        return None;
    }
    Some(Incomplete {
        key: class.key.clone(),
        name: class.name.clone(),
        link: (!class.steam_id.is_empty()).then(|| {
            format!(
                "https://steamcommunity.com/sharedfiles/filedetails/?id={}",
                class.steam_id
            )
        }),
        issues,
    })
}

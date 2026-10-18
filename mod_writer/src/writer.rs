use std::path::Path;

use exclusions::Exclusions;
use mod_parser::{is_vanilla_hero_key, proc_class_mod, types::ClassInfo};
use mod_reader::types::ClassModInfo;

use crate::fixer::fix_classes;
use crate::images::ImageStore;
use crate::output::ClassModData;
use crate::report;
use crate::uploaders::Uploaders;

/// Name of the generated data file inside the output folder
pub const CLASSES_FILE: &str = "classes.json";

pub fn write_files(
    output: &Path,
    images: &mut ImageStore,
    mods: Vec<ClassModInfo>,
    exclusions: &Exclusions,
    uploaders: &Uploaders,
    report_path: Option<&Path>,
) {
    let mut excluded = std::collections::BTreeMap::<&str, usize>::new();
    // The base game's effects: those of any class without a Steam ID
    let base = mods
        .iter()
        .find(|info| info.steam_id.is_empty())
        .map(|info| info.effects.clone())
        .unwrap_or_default();
    let classes: Vec<ClassInfo> = mods
        .into_iter()
        .map(|info| proc_class_mod(info, &base))
        .collect();
    let classes: Vec<ClassInfo> = fix_classes(classes)
        .into_iter()
        .filter(|class| match exclusion_reason(class, exclusions) {
            Some(reason) => {
                *excluded.entry(reason).or_default() += 1;
                false
            }
            None => true,
        })
        .collect();

    for (reason, count) in &excluded {
        println!("Excluded {} classes: {}", count, reason);
    }

    if let Some(path) = report_path {
        let incomplete: Vec<_> = classes.iter().filter_map(report::incomplete).collect();
        let json = serde_json::to_string_pretty(&incomplete).expect("failed to serialize report");
        match std::fs::write(path, json + "\n") {
            Ok(()) => println!(
                "{} classes with incomplete data listed in {}",
                incomplete.len(),
                path.display()
            ),
            Err(e) => eprintln!("Failed to write {}: {}", path.display(), e),
        }
    }

    let classes: Vec<ClassModData> = classes
        .into_iter()
        .map(|class| ClassModData::new(class, images, uploaders))
        .collect();

    remove_generated(output);

    let path = output.join(CLASSES_FILE);
    let json = serde_json::to_string_pretty(&classes).expect("failed to serialize classes");
    match std::fs::write(&path, json + "\n") {
        Ok(()) => println!("Wrote {} classes to {}", classes.len(), path.display()),
        Err(e) => eprintln!("Failed to write {}: {}", path.display(), e),
    }
}

fn exclusion_reason(class: &ClassInfo, exclusions: &Exclusions) -> Option<&'static str> {
    if exclusions.excludes_mod(&class.steam_id) {
        Some("excluded mod")
    } else if exclusions.excludes_class(&class.key) {
        Some("excluded class")
    } else if exclusions.exclude_vanilla_reworks && is_vanilla_rework(class) {
        Some("rework of a vanilla hero")
    } else {
        None
    }
}

// The keys are already fixed here, so workshop keys end in their Steam ID
fn is_vanilla_rework(class: &ClassInfo) -> bool {
    !class.steam_id.is_empty()
        && class
            .key
            .strip_suffix(&format!("_{}", class.steam_id))
            .is_some_and(is_vanilla_hero_key)
}

// Removes previously generated files (including the TS modules older versions
// generated). Only runs once mods were read successfully.
fn remove_generated(root: &Path) {
    let Ok(entries) = std::fs::read_dir(root) else {
        return;
    };

    for path in entries.flatten().map(|entry| entry.path()) {
        let generated = path
            .file_name()
            .and_then(|n| n.to_str())
            .is_some_and(|name| {
                name == CLASSES_FILE
                    || name == "index.tsx"
                    || (name.starts_with("Class_") && name.ends_with(".tsx"))
            });

        if generated && let Err(e) = std::fs::remove_file(&path) {
            eprintln!("Failed to remove {}: {}", path.display(), e);
        }
    }
}

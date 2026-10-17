use std::path::Path;

use mod_parser::proc_class_mod;
use mod_reader::types::ClassModInfo;

use crate::fixer::fix_classes;
use crate::images::ImageStore;
use crate::output::ClassModData;

/// Name of the generated data file inside the output folder
pub const CLASSES_FILE: &str = "classes.json";

pub fn write_files(output: &Path, images: &mut ImageStore, mods: Vec<ClassModInfo>) {
    let classes: Vec<ClassModData> = fix_classes(mods.into_iter().map(proc_class_mod).collect())
        .into_iter()
        .map(|class| ClassModData::new(class, images))
        .collect();

    remove_generated(output);

    let path = output.join(CLASSES_FILE);
    let json = serde_json::to_string_pretty(&classes).expect("failed to serialize classes");
    match std::fs::write(&path, json + "\n") {
        Ok(()) => println!("Wrote {} classes to {}", classes.len(), path.display()),
        Err(e) => eprintln!("Failed to write {}: {}", path.display(), e),
    }
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

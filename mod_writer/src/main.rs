use std::{fs::symlink_metadata, path::PathBuf};

use crate::writer::write_files;

mod fixer;
mod writer;

// Usage: mod_writer <input_dir>... <output_dir>
fn main() {
    let mut args: Vec<String> = std::env::args().skip(1).collect();

    if args.len() < 2 {
        eprintln!("Usage: mod_writer <input_dir>... <output_dir>");
        std::process::exit(1);
    }

    let output = args.pop().unwrap();
    let mut infos = vec![];

    for input in &args {
        let path = std::fs::canonicalize(PathBuf::from(input)).expect("Failed to get input path");

        let meta = symlink_metadata(&path).expect("failed to get path metadata");
        if meta.is_file() {
            panic!("Expected directory, got file: {}", input);
        } else if meta.is_symlink() {
            panic!("Expected directory, got symlink: {}", input);
        }

        let found = mod_reader::read_mods(&path);

        if found.is_empty() {
            eprintln!("No class mods found in {}", input);
            std::process::exit(1);
        }

        infos.extend(found);
    }

    // Keep keys (and their dedupe suffixes) stable regardless of input order
    infos.sort_by(|a, b| a.key.cmp(&b.key).then_with(|| a.steam_id.cmp(&b.steam_id)));

    write_files(&output, infos);
}

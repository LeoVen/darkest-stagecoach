use std::{fs::symlink_metadata, path::PathBuf};

use crate::{images::ImageStore, writer::write_files};

mod fixer;
mod images;
mod writer;

const USAGE: &str = "Usage: mod_writer --images <image_dir> <input_dir>... <output_dir>";

fn main() {
    let mut args: Vec<String> = std::env::args().skip(1).collect();

    let image_dir = match args.iter().position(|arg| arg == "--images") {
        Some(i) if i + 1 < args.len() => {
            let dir = args.remove(i + 1);
            args.remove(i);
            dir
        }
        _ => {
            eprintln!("{}", USAGE);
            std::process::exit(1);
        }
    };

    if args.len() < 2 {
        eprintln!("{}", USAGE);
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

    let mut images =
        ImageStore::new(&PathBuf::from(image_dir)).expect("failed to prepare image dir");
    write_files(&output, &mut images, infos);
    println!("Wrote {} unique images", images.len());
}

use std::{fs::symlink_metadata, path::PathBuf};

use exclusions::Exclusions;

use crate::{images::ImageStore, uploaders::Uploaders, writer::write_files};

mod fixer;
mod images;
mod output;
mod report;
mod uploaders;
mod writer;

const USAGE: &str = "Usage: mod_writer --images <image_dir> [--exclude <exclusions.json>] \
[--report <incomplete.json>] [--manifest <mods.json>] <input_dir>... <output_dir>";

/// Removes `--name <value>` from `args` and returns the value
fn take_option(args: &mut Vec<String>, name: &str) -> Option<String> {
    let i = args.iter().position(|arg| arg == name)?;
    if i + 1 >= args.len() {
        eprintln!("{}", USAGE);
        std::process::exit(1);
    }
    let value = args.remove(i + 1);
    args.remove(i);
    Some(value)
}

fn main() {
    let mut args: Vec<String> = std::env::args().skip(1).collect();

    let Some(image_dir) = take_option(&mut args, "--images") else {
        eprintln!("{}", USAGE);
        std::process::exit(1);
    };
    let exclusions = match take_option(&mut args, "--exclude") {
        Some(path) => Exclusions::read(path.as_ref()).unwrap_or_else(|e| {
            eprintln!("{}", e);
            std::process::exit(1);
        }),
        None => Exclusions::default(),
    };
    let report = take_option(&mut args, "--report").map(PathBuf::from);
    let uploaders = match take_option(&mut args, "--manifest") {
        Some(path) => Uploaders::read(path.as_ref()).unwrap_or_else(|e| {
            eprintln!("{}", e);
            std::process::exit(1);
        }),
        None => Uploaders::default(),
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
    write_files(
        output.as_ref(),
        &mut images,
        infos,
        &exclusions,
        &uploaders,
        report.as_deref(),
    );
    println!("Wrote {} unique images", images.len());
}

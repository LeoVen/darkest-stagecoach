use std::{fs::symlink_metadata, path::PathBuf};

use crate::writer::write_files;

pub mod proc;
mod writer;

fn main() {
    let mut args = std::env::args();
    _ = args.next();

    let mut input = String::default();
    let mut output = String::default();

    if let Some(input_path) = args.next() {
        input += &input_path;
    } else {
        panic!("Expected first positional argument containing a folder path to be read.");
    }

    if let Some(output_path) = args.next() {
        output += &output_path;
    } else {
        panic!("Expected second positional argument containing the output folder path");
    }

    let path = std::fs::canonicalize(PathBuf::from(&input)).expect("Failed to get input path");

    let meta = symlink_metadata(&path).expect("failed to get path metadata");
    if meta.is_file() {
        panic!("Expected directory, got file: {}", &input);
    } else if meta.is_symlink() {
        panic!("Expected directory, got symlink: {}", &input);
    }

    let infos = mod_reader::read_mods(&path);

    write_files(&output, infos);
}

//! Automatically reads the specified directory and gets all the information about class mods

pub mod parse;
pub mod reader;
pub mod types;
pub mod utils;
pub mod writer;

use std::fs;
use std::path::PathBuf;

use crate::reader::read_directory;
use crate::writer::write_classes;

macro_rules! time_it {
    ($expr:expr) => {{
        let now = ::std::time::Instant::now();
        $expr;
        (::std::time::Instant::now() - now).as_millis()
    }};
}

fn main() {
    println!("Total Time: {}ms", time_it!(main_()));
}

fn main_() {
    let mut args = std::env::args();
    let input = args
        .nth(1)
        .expect("Expected positional argument containing a file or folder path to be read.");

    let input = fs::canonicalize(PathBuf::from(input)).expect("Failed to get input path");
    let img_output = fs::canonicalize(PathBuf::from(
        "../darkest-stagecoach/src/assets/img/portraits",
    ))
    .expect("Failed to get image output path");
    let src_output = fs::canonicalize(PathBuf::from("../darkest-stagecoach/src/data/classes"))
        .expect("Failed to get files output path");

    println!(
        "Reading From: {:?}\nOutputing Images To: {:?}\nOutputing Files To: {:?}",
        input, img_output, src_output
    );

    let rt = tokio::runtime::Runtime::new().unwrap();
    match rt.block_on(async { read_directory(input).await }) {
        Ok(classes) => {
            write_classes(classes, img_output, src_output);
        }
        Err(e) => eprintln!("{}", e),
    }
}

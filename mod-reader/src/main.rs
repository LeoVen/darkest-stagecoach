//! Automatically reads the specified directory and gets all the information about class mods

pub mod files;
pub mod parse;
pub mod types;
pub mod utils;

use std::path::PathBuf;

use crate::files::read_directory;

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
    fn get_path() -> PathBuf {
        let args = std::env::args().into_iter().nth(1);
        let folder =
            args.expect("Expected one positional argument containing a file or folder path.");
        PathBuf::from(folder)
    }

    let path = get_path();

    let rt = tokio::runtime::Runtime::new().unwrap();
    match rt.block_on(async { read_directory(path.clone()).await }) {
        Ok((classes, failed)) => {
            for class_info in classes.iter() {
                println!(
                    "{:<20} {:>10} : {:?}",
                    class_info.name, class_info.steam_id, class_info.stats.armour[4]
                );
            }
            println!("Found: {} classes", classes.len());
            println!("{} classes failed to be parsed", failed);
        }
        Err(e) => eprintln!("{}", e),
    }
}

use std::{fs::symlink_metadata, path::PathBuf};

use tokio::io;

fn main() {
    let mut args = std::env::args();
    let input = args
        .nth(1)
        .expect("Expected positional argument containing a folder path to be read.");

    let path = std::fs::canonicalize(PathBuf::from(&input)).expect("Failed to get input path");

    let meta = symlink_metadata(&path).expect("failed to get path metadata");
    if meta.is_file() {
        panic!("Expected directory, got file: {}", &input);
    } else if meta.is_symlink() {
        panic!("Expected directory, got symlink: {}", &input);
    }

    let rt = tokio::runtime::Runtime::new().unwrap();
    match rt.block_on(async { read_all(path).await }) {
        Ok(mut infos) => {
            infos.sort_by(|a, b| a.key.cmp(&b.key));
            for info in infos {
                println!(
                    "{:>20} : {:2} {:2}",
                    info.key,
                    info.info.len(),
                    info.art.len()
                );
            }
        }
        Err(e) => eprintln!("{}", e),
    }
}

async fn read_all(path: PathBuf) -> io::Result<Vec<mod_reader::ClassModInfo>> {
    let roots = root_finder::find_roots(path).await?;

    let mut result = vec![];

    for root in roots {
        if let Some(info) = mod_reader::read_mod(&root).await {
            result.push(info);
        } else {
            eprintln!(
                "Mod couldn't be read: {}",
                root.to_string_lossy().to_string()
            );
        }
    }

    Ok(result)
}

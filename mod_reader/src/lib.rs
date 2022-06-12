use std::path::{Path, PathBuf};

use tokio::io;

use crate::types::ClassModInfo;

pub mod types;

pub fn read_mods(root: &Path) -> Vec<ClassModInfo> {
    let rt = tokio::runtime::Runtime::new().unwrap();
    match rt.block_on(async { read_all(root.to_path_buf()).await }) {
        Ok(mut infos) => {
            infos.sort_by(|a, b| a.key.cmp(&b.key));
            return infos;
        }
        Err(e) => eprintln!("Failed to read all mod files: {}", e),
    }
    return vec![];
}

async fn read_all(path: PathBuf) -> io::Result<Vec<ClassModInfo>> {
    let roots = root_finder::find_roots(path).await?;

    let mut result = vec![];

    for root in roots {
        if let Some(info) = read_single(&root).await {
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

async fn read_single(root: &Path) -> Option<ClassModInfo> {
    let name = root.file_name()?.to_str()?.to_string();

    let info_file = root.join(name.clone() + ".info.darkest");
    let art_file = root.join(name.clone() + ".art.darkest");

    let info_data = match tokio::fs::read_to_string(&info_file).await {
        Ok(data) => data,
        Err(e) => {
            eprintln!("Failed to read info data ({:?}):\n\t{}", info_file, e);
            return None;
        }
    };
    let art_data = match tokio::fs::read_to_string(&art_file).await {
        Ok(data) => data,
        Err(e) => {
            eprintln!("Failed to read art data ({:?}):\n\t{}", art_file, e);
            return None;
        }
    };

    let info = match parser::parse_darkest(info_data) {
        Ok(info) => info,
        Err(e) => {
            eprintln!("Failed to parse info data: {}", e);
            return None;
        }
    };
    let art = match parser::parse_darkest(art_data) {
        Ok(info) => info,
        Err(e) => {
            eprintln!("Failed to parse art data: {}", e);
            return None;
        }
    };

    return Some(ClassModInfo {
        key: name,
        art,
        info,
    });
}

fn _file_to_base64(_path: PathBuf) -> Vec<u8> {
    todo!()
}

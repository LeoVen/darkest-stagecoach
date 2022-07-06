use std::path::{Path, PathBuf};

use tokio::io;

use crate::{reader::ModReader, types::ClassModInfo};

mod reader;
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

    println!();

    Ok(result)
}

async fn read_single(root: &Path) -> Option<ClassModInfo> {
    let name = root.file_name()?.to_str()?.to_string();

    print!("\nReading class mod {:<20} ", &name);

    let mut mod_info = Default::default();

    let mod_reader = ModReader::new(&name, root);
    mod_reader.read_steam_id(&mut mod_info);
    mod_reader.read_darkest(&mut mod_info).await.ok()?;
    _ = mod_reader.read_loc(&mut mod_info).await;
    _ = mod_reader.read_portrait(&mut mod_info).await;
    _ = mod_reader.read_skills(&mut mod_info).await;
    _ = mod_reader.read_guild_header(&mut mod_info).await;
    _ = mod_reader.read_icons_equip(&mut mod_info).await;

    mod_info.key = name;

    Some(mod_info)
}

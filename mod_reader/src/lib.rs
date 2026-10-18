use std::{
    collections::HashMap,
    path::{Path, PathBuf},
    sync::Arc,
};

use tokio::io;

use crate::{
    reader::{ModReader, steam_dir_from_path},
    types::{ClassModInfo, ModEffects},
};

mod effects;
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
    vec![]
}

async fn read_all(path: PathBuf) -> io::Result<Vec<ClassModInfo>> {
    let mut roots = root_finder::find_roots(path.clone()).await?;

    roots.sort();

    let mut result = vec![];
    // Effects by mod root: the workshop folder, or the input folder for the
    // base game, whose DLC heroes also use its base effects
    let mut effects: HashMap<PathBuf, Arc<ModEffects>> = HashMap::new();

    for root in roots {
        let mod_root = steam_dir_from_path(&root).unwrap_or(&path).to_path_buf();
        let effects = effects
            .entry(mod_root)
            .or_insert_with_key(|mod_root| Arc::new(effects::read_effects(mod_root)))
            .clone();

        if let Some(mut info) = read_single(&root).await {
            info.effects = effects;
            result.push(info);
        } else {
            eprintln!("Mod couldn't be read: {}", root.to_string_lossy());
        }
    }

    println!();

    Ok(result)
}

async fn read_single(root: &Path) -> Option<ClassModInfo> {
    let name = root.file_name()?.to_str()?.to_string();

    print!("\nReading class mod {:<20} ", name);

    let mut mod_info = Default::default();

    let mod_reader = ModReader::new(&name, root);
    mod_reader.read_steam_id(&mut mod_info);
    mod_reader.read_darkest(&mut mod_info).await.ok()?;
    _ = mod_reader.read_loc(&mut mod_info).await;
    _ = mod_reader.read_portrait(&mut mod_info).await;
    _ = mod_reader.read_skills(&mut mod_info).await;
    _ = mod_reader.read_icons_equip(&mut mod_info).await;

    mod_info.key = name;

    Some(mod_info)
}

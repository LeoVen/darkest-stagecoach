use std::path::Path;

// TODO read ability icons and icons_equip
pub struct ClassModInfo {
    pub key: String,
    pub art: parser::DarkestFile,
    pub info: parser::DarkestFile,
}

pub async fn read_mod(root: &Path) -> Option<ClassModInfo> {
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

// fn file_to_base64(path: PathBuf) -> Vec<u8> {
//     todo!()
// }

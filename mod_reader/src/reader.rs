use std::path::Path;

use parser::DarkestFile;
use tokio::{fs, io};

use crate::types::ClassModInfo;

pub struct ModReader<'a> {
    name: &'a str,
    root: &'a Path,
}

impl<'a> ModReader<'a> {
    pub fn new(name: &'a str, root: &'a Path) -> Self {
        Self { name, root }
    }

    pub async fn read_darkest(&self, mod_info: &mut ClassModInfo) {
        let info_file = self.root.join(self.name.to_string() + ".info.darkest");
        let art_file = self.root.join(self.name.to_string() + ".art.darkest");

        mod_info.info = match parse_darkest(&info_file).await {
            Ok(info) => info,
            Err(e) => {
                eprintln!(
                    "Failed to read info data for {} ({:?}):\n\t{}",
                    &self.name, info_file, e
                );
                Default::default()
            }
        };

        mod_info.art = match parse_darkest(&art_file).await {
            Ok(info) => info,
            Err(e) => {
                eprintln!(
                    "Failed to read info data for {} ({:?}):\n\t{}",
                    &self.name, info_file, e
                );
                Default::default()
            }
        };
    }

    pub async fn read_portrait(&self, mod_info: &mut ClassModInfo) {
        let folder = self.root.join(self.name.to_string() + "_A");
        let file = folder.join(self.name.to_string() + "_portrait_roster.png");

        match image_to_base64(&file).await {
            Ok(data) => mod_info.portrait = data,
            Err(e) => eprintln!("failed to read portrait: {}", e),
        }
    }
}

pub async fn parse_darkest(path: &Path) -> anyhow::Result<DarkestFile> {
    let info_data = fs::read_to_string(&path).await?;
    anyhow::Ok(parser::parse_darkest(info_data))
}

pub async fn image_to_base64(path: &Path) -> io::Result<String> {
    let file = fs::read(path).await?;
    return Ok(base64::encode(file));
}

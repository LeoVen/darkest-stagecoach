use std::path::PathBuf;

use root_finder::find_roots;

fn main() {
    let path =
        PathBuf::from("C:\\Program Files (x86)\\Steam\\steamapps\\common\\DarkestDungeon\\mods");

    let rt = tokio::runtime::Runtime::new().unwrap();
    match rt.block_on(async { find_roots(path).await }) {
        Ok(paths) => {
            for path in paths {
                println!("{}", path.file_name().unwrap().to_str().unwrap());
            }
        }
        Err(e) => eprintln!("{}", e),
    }
}

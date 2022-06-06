use std::{fs::read_to_string, path::PathBuf, str::FromStr};

use parser::parse_darkest;

fn main() {
    let path = PathBuf::from_str(
        r"C:\Program Files (x86)\Steam\steamapps\common\DarkestDungeon\heroes\abomination\abomination.art.darkest",
    );
    let path = path.expect("failed to get PathBuf from str");

    let data = read_to_string(path);
    let data = data.expect("failed to get file data");

    let result = parse_darkest(data);

    match result {
        Ok(result) => {
            for (key, map) in result {
                println!("key: {}\nmap:", key);
                for (k, v) in map {
                    print!("K: {} -> ", k);
                    for values in v {
                        print!("{} ", values);
                    }
                    println!("");
                }
                println!();
            }
        }
        Err(e) => eprintln!("{}", e),
    };
}

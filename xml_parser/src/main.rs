use std::fs;

use xml_parser::parse_xml;

fn main() {
    let path = r"C:\Program Files (x86)\Steam\steamapps\common\DarkestDungeon\localization\heroes.string_table.xml";

    let data = fs::read_to_string(path).expect("failed to read xml data");

    match parse_xml(data) {
        Ok(data) => {
            for (key, value) in &data {
                println!("{}: {:?}", key, value);
            }

            println!(
                "\n\nFound {} entries",
                data.iter().fold(0, |acc, (_, v)| acc + v.len())
            );
        }
        Err(e) => eprintln!("{}", e),
    }
}

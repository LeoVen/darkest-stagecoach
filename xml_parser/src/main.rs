use std::fs;

use xml_parser::parse_loc_xml;

fn main() {
    let path = r"C:\Program Files (x86)\Steam\steamapps\common\DarkestDungeon\localization\heroes.string_table.xml";

    let data = fs::read_to_string(path).expect("failed to read xml data");

    match parse_loc_xml(data) {
        Ok(languages) => {
            for (language, entries) in &languages {
                println!(
                    "{}: {} entries",
                    language,
                    entries.values().map(Vec::len).sum::<usize>()
                );
            }
        }
        Err(e) => eprintln!("{}", e),
    }
}

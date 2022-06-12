use std::{fs::File, io::Write, path::PathBuf, str::FromStr};

use mod_reader::types::ClassModInfo;

use mod_parser::types::ClassInfo;

use mod_parser::{proc_resistances, proc_stats};

const PREFIX: &str = "Class_";
const SUFFIX: &str = ".tsx";

pub fn write_files(output: &str, mods: Vec<ClassModInfo>) {
    let root = PathBuf::from_str(&output).unwrap();
    let result = mods.into_iter().map(transform_info).map(make_code);

    for (name, data) in result {
        let mut file_name = root.clone();
        file_name.push(&format!("{}{}{}", PREFIX, &name, SUFFIX));

        match File::create(&file_name) {
            Ok(mut file) => match file.write_all(data.as_bytes()) {
                Ok(_) => println!("Created file {}", file_name.to_str().unwrap()),
                Err(e) => eprintln!("{}", e),
            },
            Err(e) => eprintln!("{}", e),
        }
    }
}

fn transform_info(info: ClassModInfo) -> ClassInfo {
    let mut result = ClassInfo::default();

    result.res = proc_resistances(&info);
    result.stats = proc_stats(&info);

    result.key = info.key;

    return result;
}

pub fn make_code(class_info: ClassInfo) -> (String, String) {
    let a = &class_info.stats.armour;
    let w = &class_info.stats.weapon;
    (
        class_info.key,
        format!(
            r"import ClassMod from '../ClassMod'
import portrait from '../../assets/img/portraits/{image}'

export const Class_{name}: ClassMod = {{
    key: '{name}',
    name: '{name}',
    portrait: portrait,
    religious: {religious},
    resistances: {resistances},
    position: {pos:?},
    totalSkills: {skills},
    stats: {{
        armours: [
            {armours}
        ],
        weapons: [
            {weapons}
        ]
    }},
    sources: [
        {{
            name: 'Steam',
            link: '{steam_link}'
        }}
    ]
}}
",
            image = class_info.image_name,
            name = class_info.name,
            pos = class_info.pos,
            skills = class_info.total_skills,
            armours = format!(
                "{},\n{s:<12}{},\n{s:<12}{},\n{s:<12}{},\n{s:<12}{}",
                a[0],
                a[1],
                a[2],
                a[3],
                a[4],
                s = ""
            ),
            weapons = format!(
                "{},\n{s:<12}{},\n{s:<12}{},\n{s:<12}{},\n{s:<12}{}",
                w[0],
                w[1],
                w[2],
                w[3],
                w[4],
                s = ""
            ),
            resistances = class_info.res,
            religious = class_info.religious,
            steam_link = steam_link(&class_info.steam_id)
        ),
    )
}

fn steam_link(steam_id: &str) -> String {
    format!(
        "https://steamcommunity.com/sharedfiles/filedetails/?id={}",
        steam_id
    )
}

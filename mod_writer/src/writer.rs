use std::path::Path;
use std::{fs::File, io::Write, path::PathBuf, str::FromStr};

use mod_parser::proc_class_mod;
use mod_parser::types::{ClassInfo, SkillInfo};
use mod_reader::types::ClassModInfo;

const AUTO_GENERATED: &str = "// THIS FILE WAS AUTO-GENERATED\n";

pub fn write_files(output: &str, mods: Vec<ClassModInfo>) {
    let root = PathBuf::from_str(&output).expect("failed to get path from output str");
    let result = mods.into_iter().map(proc_class_mod).map(make_code);

    let mut classes = vec![];

    for (name, data) in result {
        let mut file_name = root.clone();
        let fname = format!("Class_{}.tsx", &name);
        file_name.push(&fname);

        classes.push(fname.strip_suffix(".tsx").unwrap_or(&fname).to_string());

        match File::create(&file_name) {
            Ok(mut file) => match file.write_all(data.as_bytes()) {
                Ok(_) => println!(
                    "Created file {}",
                    file_name
                        .to_str()
                        .expect("failed to get file name str from path")
                ),
                Err(e) => eprintln!("{}", e),
            },
            Err(e) => eprintln!("{}", e),
        }
    }

    make_index(&root, classes);
}

fn make_index(root: &Path, classes: Vec<String>) {
    let mut index_path = root.to_path_buf();
    index_path.push("index.tsx");

    println!(
        "\nCreating index {}",
        index_path.to_str().expect("failed to get index_path str")
    );

    let mut index_data = String::with_capacity(classes.len() * 1000);

    index_data += AUTO_GENERATED;
    index_data += "import { ClassModData } from '../ClassMod'\n\n";

    for class in classes.iter() {
        index_data += &format!("import {{ {class} }} from './{class}'\n");
    }

    index_data += "\nexport const ClassModIndex = classModIndex()\n\n";
    index_data += "export function classModIndex(): Map<string, ClassModData> {\n";
    index_data += "    return new Map([\n";

    for class in classes.iter() {
        index_data += &format!("        ['{class}', {class}],\n");
    }

    index_data += "    ])\n";
    index_data += "}\n";

    match File::create(&index_path) {
        Ok(mut file) => match file.write_all(index_data.as_bytes()) {
            Ok(_) => println!(
                "Created index {}",
                index_path
                    .to_str()
                    .expect("failed to get file name str from path")
            ),
            Err(e) => eprintln!("{}", e),
        },
        Err(e) => eprintln!("{}", e),
    }
}

fn make_code(class_info: ClassInfo) -> (String, String) {
    let a = &class_info.stats.armour;
    let w = &class_info.stats.weapon;
    (
        class_info.key.to_string(),
        format!(
            r"{AUTO_GENERATED}
import {{ ClassModData }} from '../ClassMod'

export const Class_{key}: ClassModData = {{
    key: '{key}',
    name: `{name}`,
    originalHero: {original_hero},
    religious: {religious},
    transform: {transform},
    resistances: {resistances},
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
    ],
    skills: [{skills}
    ],
    portrait: `{portrait}`,
    guild: `{guild}`,
}}
",
            key = &class_info.key,
            name = &class_info.name,
            original_hero = &class_info.original_hero,
            portrait = class_info.portrait,
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
            transform = class_info.transform,
            steam_link = steam_link(&class_info.steam_id),
            skills = format_skills(&class_info.skills),
            guild = class_info.guild,
        ),
    )
}

fn format_skills(skills: &[SkillInfo]) -> String {
    let mut result = String::with_capacity(40_000 * skills.len());

    skills
        .iter()
        .for_each(|skill| result += &(skill.to_string() + ","));

    result
}

fn steam_link(steam_id: &str) -> String {
    format!(
        "https://steamcommunity.com/sharedfiles/filedetails/?id={}",
        steam_id
    )
}

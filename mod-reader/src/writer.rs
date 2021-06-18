use std::{
    collections::HashSet,
    fs::File,
    io::Write,
    path::{Path, PathBuf},
};

use crate::types::*;

const WRITE_OVERRIDE: bool = true;

pub fn write_classes(classes: Vec<ClassInfo>, img_output: PathBuf, src_output: PathBuf) {
    let classes = filter_duplicates(classes);
    println!("After: {}", classes.len());
    let total = classes.len();
    println!("Found: {} classes", total);
    let mut filtered = vec![];
    for class_info in classes.into_iter() {
        if class_info.failed {
            println!(
                "{:<20} {:>10} : Failed",
                class_info.name, class_info.steam_id
            );
        } else {
            write_data_file(&class_info, &src_output);
            copy_portrait_file(&class_info, &img_output);
            filtered.push(class_info);
        }
    }
    make_index(&filtered);
    println!("{:?} failed to be parsed", total - filtered.len())
}

pub fn write_data_file(class_info: &ClassInfo, src_output: &dyn AsRef<Path>) {
    let mut file_output = src_output.as_ref().to_path_buf();
    file_output.push("Class_".to_string() + &(class_info.name.to_string() + ".tsx"));
    if WRITE_OVERRIDE || !Path::new(&file_output).is_file() {
        if let Ok(mut file) = File::create(&file_output) {
            match file.write_all(make_code(class_info).as_bytes()) {
                Ok(_) => {}
                Err(e) => eprintln!("Failed to write {:?}\n{}", &file_output, e),
            }
        }
    } else {
        println!(
            "File for {} {} already exists",
            class_info.name, class_info.steam_id
        );
    }
}

pub fn filter_duplicates(classes: Vec<ClassInfo>) -> Vec<ClassInfo> {
    let mut names = HashSet::new();
    let mut filter = HashSet::new();

    for (i, class_info) in classes.iter().enumerate() {
        if names.contains(&class_info.name) {
            eprintln!("Found duplicate: {}", &class_info.name);
        } else {
            filter.insert(i);
            names.insert(class_info.name.clone());
        }
    }

    println!("Before: {}", classes.len());

    let mut result = classes
        .into_iter()
        .enumerate()
        .filter(|(i, _)| filter.contains(i))
        .map(|(_, c)| c)
        .collect::<Vec<_>>();
    result.sort_by(|a, b| a.name.partial_cmp(&b.name).unwrap());
    result
}

pub fn steam_link(steam_id: &str) -> String {
    format!(
        "https://steamcommunity.com/sharedfiles/filedetails/?id={}",
        steam_id
    )
}

pub fn copy_portrait_file(class_info: &ClassInfo, img_output: &dyn AsRef<Path>) {
    let mut out = img_output.as_ref().to_path_buf();
    out.push(&class_info.image_name);
    match std::fs::copy(&class_info.image_path, &out) {
        Ok(_) => {}
        Err(e) => eprintln!(
            "{}: {}",
            e,
            &class_info.image_path.to_str().unwrap().to_string()
        ),
    }
}

pub fn make_index(filtered: &[ClassInfo]) {
    let path = Path::new("../darkest-stagecoach/src/data/index.tsx");
    match std::fs::OpenOptions::new()
        .write(true)
        .truncate(true)
        .open(path)
    {
        Ok(mut file) => {
            let mut result = String::with_capacity(10000);
            result += "import ClassMod from './ClassMod'\n";

            for class_info in filtered.iter() {
                result += &format!(
                    "import {{ Class_{} }} from './classes/Class_{}'\n",
                    class_info.name,
                    class_info
                        .name
                        .clone()
                        .strip_suffix(".tsx")
                        .unwrap_or(&class_info.name)
                );
            }

            result += "\nexport const AllClasses: ClassMod[] = [\n";

            for (i, class_info) in filtered.iter().enumerate() {
                if filtered.len() - 1 == i {
                    result += &format!("    Class_{}\n", class_info.name);
                } else {
                    result += &format!("    Class_{},\n", class_info.name);
                }
            }

            result += "]\n";

            let _ = file.write_all(result.as_bytes());
        }
        Err(e) => eprintln!("{}", e),
    }
}

pub fn make_code(class_info: &ClassInfo) -> String {
    let a = &class_info.stats.armour;
    let w = &class_info.stats.weapon;
    format!(
        r"
import ClassMod from '../ClassMod'
import portrait from '../../assets/img/portraits/{image}'

export const Class_{name}: ClassMod = {{
    name: '{name}',
    portrait: portrait,
    religious: {religious},
    resistances: {resistances},
    stats: {{
        armours: [
            {armours}
        ],
        weapons: [
            {weapons}
        ],
    }},
    sources: [
        {{
            name: 'Steam',
            link: '{steam_link}'
        }}
    ],
}}",
        image = class_info.image_name,
        name = class_info.name,
        armours = format!("{},\n{},\n{},\n{},\n{}", a[0], a[1], a[2], a[3], a[4]),
        weapons = format!("{}\n,{}\n,{}\n,{}\n,{}", w[0], w[1], w[2], w[3], w[4]),
        resistances = class_info.res,
        religious = class_info.religious,
        steam_link = steam_link(&class_info.steam_id)
    )
}

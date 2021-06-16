use std::path::PathBuf;

use crate::types::*;

pub fn write_classes(classes: Vec<ClassInfo>, img_output: PathBuf, src_output: PathBuf) {
    for class_info in classes.iter() {
        if class_info.failed {
            println!(
                "{:<20} {:>10} : Failed",
                class_info.name, class_info.steam_id
            );
        } else {
            println!("{:<20} {:>10}", class_info.name, class_info.steam_id);
            let mut out = img_output.clone();
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
    }
    println!("Found: {} classes", classes.len());
    println!(
        "{:?} failed to be parsed",
        classes.iter().filter(|c| c.failed).count()
    )
}

pub fn write_data_file(class_info: &ClassInfo, src_output: PathBuf) {}

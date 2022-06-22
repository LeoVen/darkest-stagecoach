use std::collections::HashMap;

use mod_parser::types::ClassInfo;

// 1. Dedupe classes with the same key!
// 2. Fix their names
pub fn fix_classes(mut input: Vec<ClassInfo>) -> Vec<ClassInfo> {
    let mut dupes = HashMap::new();

    for class in input.iter_mut() {
        let value = dupes.entry(class.key.to_string()).or_insert(0);
        *value += 1;

        class.key = class.key.replace("-", "_");
        class.key += &value.to_string();
    }

    input
}

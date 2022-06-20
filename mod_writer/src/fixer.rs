use std::collections::HashMap;

use mod_reader::types::ClassModInfo;

// 1. Dedupe classes with the same key!
// 2. Fix their names
pub fn fix_classes(mut input: Vec<ClassModInfo>) -> Vec<ClassModInfo> {
    let mut dupes = HashMap::new();

    for class in input.iter_mut() {
        let value = dupes.entry(class.key.to_string()).or_insert(0);
        *value += 1;

        class.key = class.key.replace("-", "_");
        class.key += &value.to_string();
    }

    input
}

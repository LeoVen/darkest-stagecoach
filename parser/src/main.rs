use std::collections::BTreeMap;

use parser::parse_darkest;

fn main() {
    let data = String::from(
        "test: .value0 \"id\" .value1 10% .value2 .1 .value3 1. .value4 12.3% .value5 1 .1 1.\n",
    );

    let result = parse_darkest(data);

    for (key, map) in result {
        println!("key: {}\nmap:", key);
        for (k, v) in BTreeMap::from_iter(map.into_iter()) {
            print!("K: {} -> ", k);
            for values in v {
                print!("{} ", values);
            }
            println!("");
        }
        println!();
    }
}

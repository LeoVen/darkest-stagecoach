use std::collections::HashMap;

pub mod types;

pub type DarkestRow = HashMap<String, Vec<String>>;
pub type DarkestFile = Vec<(String, DarkestRow)>;

pub fn parse_darkest(data: impl ToString) -> Result<DarkestFile, String> {
    let data = data.to_string();

    let lines = data.lines();

    let mut result = vec![];

    lines.for_each(|line| {
        let idx = line.find(":");
        if let Some(idx) = idx {
            let key = &line[..idx];
            let map = parse_line(&line[idx + 1..]);
            if let Some(map) = map {
                result.push((key.to_string(), map));
            } else {
                println!("Warning: line failed to be parsed:\n{}", line);
            }
        }
    });

    return Ok(result);
}

// TODO edge case: some values are floats and have a '.' in the middle
fn parse_line(mut line: &str) -> Option<DarkestRow> {
    line = line.trim();

    if line.len() == 0 {
        return None;
    }

    let mut result = HashMap::new();

    let splits = line
        .split(".")
        .filter(|s| s.len() > 0)
        .collect::<Vec<&str>>();

    for chars in splits.into_iter() {
        let space = chars.find(" ");
        if let Some(space) = space {
            let key = &chars[..space];

            let values = chars[space..]
                .trim()
                .split(" ")
                .map(|s| s.to_string())
                .collect::<Vec<String>>();

            result.insert(key.to_string(), values);
        }
    }

    return Some(result);
}

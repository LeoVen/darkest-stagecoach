use std::collections::HashMap;

pub fn parse_darkest(
    data: impl ToString,
) -> Result<Vec<(String, HashMap<String, Vec<String>>)>, String> {
    let data = data.to_string();

    let lines = data.lines();

    let mut result = vec![];

    lines.for_each(|line| {
        let idx = line.find(":");
        if let Some(idx) = idx {
            let key = &line[..idx];
            let map = parse_line(&line[idx..]);
            result.push((key.to_string(), map));
        }
    });

    return Ok(result);
}

fn parse_line(_line: &str) -> HashMap<String, Vec<String>> {
    todo!()
}

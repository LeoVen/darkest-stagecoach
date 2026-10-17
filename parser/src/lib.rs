use std::collections::HashMap;

pub type DarkestRow = HashMap<String, Vec<String>>;
pub type DarkestFile = Vec<(String, DarkestRow)>;

pub fn parse_darkest(data: String) -> DarkestFile {
    data.lines()
        .map(|line| line.trim())
        .filter(|line| !line.starts_with("//"))
        .filter_map(|line| {
            let (key, rest) = line.split_once(':')?;
            Some((key.to_string(), parse_line(rest)?))
        })
        .collect()
}

// Parses a line like `.name "a b" .dmg 4 8 .def 7.5%`. A token starting with a
// '.' followed by a letter starts a new field; anything else (including values
// like `.5`) is a value of the current field.
fn parse_line(line: &str) -> Option<DarkestRow> {
    let mut result = HashMap::new();
    let mut current: Option<(String, Vec<String>)> = None;

    // Fields without values are skipped since consumers index into them
    let mut insert = |key: String, values: Vec<String>| {
        if !values.is_empty() {
            result.insert(key, values);
        }
    };

    for token in tokenize(line) {
        let is_field = !token.quoted
            && token.text.starts_with('.')
            && token.text[1..].starts_with(|c: char| c.is_ascii_alphabetic());

        if is_field {
            if let Some((key, values)) = current.take() {
                insert(key, values);
            }
            current = Some((token.text[1..].to_string(), vec![]));
        } else if let Some((_, values)) = current.as_mut() {
            values.push(token.text);
        }
    }

    if let Some((key, values)) = current {
        insert(key, values);
    }

    if result.is_empty() {
        None
    } else {
        Some(result)
    }
}

struct Token {
    text: String,
    quoted: bool,
}

// Splits on whitespace, keeping double-quoted strings (without quotes) as a
// single token
fn tokenize(line: &str) -> Vec<Token> {
    let mut tokens = vec![];
    let mut chars = line.trim().chars().peekable();

    while let Some(&c) = chars.peek() {
        if c.is_whitespace() {
            chars.next();
        } else if c == '"' {
            chars.next();
            let text = chars.by_ref().take_while(|&c| c != '"').collect();
            tokens.push(Token { text, quoted: true });
        } else {
            let mut text = String::new();
            while let Some(&c) = chars.peek() {
                if c.is_whitespace() {
                    break;
                }
                text.push(c);
                chars.next();
            }
            tokens.push(Token {
                text,
                quoted: false,
            });
        }
    }

    tokens
}

#[cfg(test)]
mod tests {
    use super::*;

    fn row(line: &str) -> DarkestRow {
        let mut file = parse_darkest(line.to_string());
        assert_eq!(file.len(), 1);
        file.remove(0).1
    }

    fn get<'a>(row: &'a DarkestRow, key: &str) -> Vec<&'a str> {
        row[key].iter().map(String::as_str).collect()
    }

    #[test]
    fn parses_basic_fields() {
        let r = row(r#"weapon: .name "vestal_weapon_0" .atk 0% .dmg 4 8 .crit 1% .spd 4"#);
        assert_eq!(get(&r, "name"), ["vestal_weapon_0"]);
        assert_eq!(get(&r, "atk"), ["0%"]);
        assert_eq!(get(&r, "dmg"), ["4", "8"]);
        assert_eq!(get(&r, "spd"), ["4"]);
    }

    #[test]
    fn keeps_decimal_values() {
        let r = row("armour: .def 7.5% .prot 0 .hp 24");
        assert_eq!(get(&r, "def"), ["7.5%"]);
        assert_eq!(get(&r, "hp"), ["24"]);

        let r = row("test: .a .1 .b 1. .c 12.3% .d 1 .1 1.");
        assert_eq!(get(&r, "a"), [".1"]);
        assert_eq!(get(&r, "b"), ["1."]);
        assert_eq!(get(&r, "c"), ["12.3%"]);
        assert_eq!(get(&r, "d"), ["1", ".1", "1."]);
    }

    #[test]
    fn keeps_spaces_in_quoted_values() {
        let r = row(r#"combat_skill: .id "smite" .effect "Stun 1" "Bleed 2""#);
        assert_eq!(get(&r, "id"), ["smite"]);
        assert_eq!(get(&r, "effect"), ["Stun 1", "Bleed 2"]);
    }

    #[test]
    fn skips_comments_and_empty_lines() {
        let file = parse_darkest("// comment\n\nempty:\nhp: .value 10 .flag\n".to_string());
        assert_eq!(file.len(), 1);
        assert_eq!(file[0].0, "hp");
        assert!(!file[0].1.contains_key("flag"));
    }
}

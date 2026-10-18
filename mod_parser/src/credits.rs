//! Credits from the "Credits" section of a workshop description. Mods write
//! them freely, so this only takes lines in a few common shapes and skips
//! prose ("Huge thanks to X for ...") rather than guessing:
//!
//! - `Name - Art, Animation` (also `Name: ...`, `Name<tab>...`)
//! - `Art, Animation: Name, Other` (roles first)
//! - `Sprite art by Name and Other`

use std::sync::LazyLock;

use regex::Regex;

#[derive(Debug, Clone, PartialEq)]
pub struct Credit {
    pub name: String,
    /// Role names as in `Credits` in `src/Types.tsx`, plus "Translation"
    pub roles: Vec<&'static str>,
    /// Steam profile linked on the name, if any
    pub link: Option<String>,
    /// Credited as "Me" (or "Name (me)"): the uploader
    pub is_uploader: bool,
}

/// Role name and the pattern of the words that mean it (lowercase)
const ROLES: &[(&str, &str)] = &[
    ("All", r"\b(everything|all|mod)\b"),
    ("Animation", r"anim"),
    (
        "Art",
        r"\bart|sprite|icon|illustrat|draw|portrait|paint|skin|palette|recolou?r",
    ),
    ("Concept", r"concept|idea"),
    ("Design", r"design|balanc"),
    (
        "Scripting",
        r"cod(e|ing)|script|program|develop|implement|\bdev\b",
    ),
    ("Sound", r"sound|sfx|audio|voice|music"),
    ("Testing", r"test"),
    ("Trailer", r"trailer|video"),
    ("Writing", r"writ|stor(y|ies)|lore|text|dialog"),
    (
        "Translation",
        r"translat|chinese|russian|korean|spanish|polish|german|french|portug|brazil|japanese",
    ),
];

fn re(pattern: &str) -> Regex {
    Regex::new(pattern).expect("invalid regex")
}

static ROLE_PATTERNS: LazyLock<Vec<(&str, Regex)>> =
    LazyLock::new(|| ROLES.iter().map(|(role, p)| (*role, re(p))).collect());
static URL: LazyLock<Regex> = LazyLock::new(|| re(r"(?i)\[url=([^\]]*)\](.*?)\[/url\]"));
static TAG: LazyLock<Regex> = LazyLock::new(|| {
    re(r"(?i)\[/?(b|i|u|s|h\d|list|olist|\*|quote|spoiler|strike|noparse|code|table|tr|td|th)\]")
});
static HEADING: LazyLock<Regex> = LazyLock::new(|| re(r"(?i)^\s*\[h\d\]"));
static BULLET: LazyLock<Regex> = LazyLock::new(|| re(r"^[\s*•·\-–—>~+]+"));
// Emoji and other symbols used as bullets
static SYMBOLS: LazyLock<Regex> = LazyLock::new(|| re(r"^[^\w\[(@]+\s*"));
static NAME_AND_ROLES: LazyLock<Regex> = LazyLock::new(|| {
    re(r"^(?P<name>.{1,40}?)\s*(?:\s[-–—]+\s*|:\s*|\t+\s*[-–—]?\s*)(?P<roles>.+)$")
});
static ROLES_BY: LazyLock<Regex> =
    LazyLock::new(|| re(r"(?i)^(?P<roles>[a-z ,/&]{2,60}?)\s+by\s+(?P<names>.+?)\.?$"));
static NAME_LIST: LazyLock<Regex> = LazyLock::new(|| re(r",\s*|\s+and\s+|\s*&\s*"));
static PARENTHESES: LazyLock<Regex> = LazyLock::new(|| re(r"\(([^)]*)\)"));
// Discord tags like `Name#1234`
static DISCRIMINATOR: LazyLock<Regex> = LazyLock::new(|| re(r"#\d{4}\s*$"));
static NOT_A_NAME: LazyLock<Regex> = LazyLock::new(|| {
    re(
        r"(?i)\b(thanks?|special|everyone|all the|huge|the following|for|and the|by|translators?|testers?|playtesters?|contributors?|community|credits?|original|patreon|red ?hook|discord|studios?|ltd|team)\b",
    )
});

pub fn parse_credits(description: &str) -> Vec<Credit> {
    let mut result: Vec<Credit> = vec![];

    for line in credit_lines(description) {
        for credit in parse_line(line) {
            match result
                .iter_mut()
                .find(|c| c.name.eq_ignore_ascii_case(&credit.name))
            {
                Some(existing) => {
                    for role in credit.roles {
                        if !existing.roles.contains(&role) {
                            existing.roles.push(role);
                        }
                    }
                    existing.link = existing.link.take().or(credit.link);
                    existing.is_uploader |= credit.is_uploader;
                }
                None => result.push(credit),
            }
        }
    }

    for credit in &mut result {
        credit
            .roles
            .sort_by_key(|role| ROLES.iter().position(|(r, _)| r == role));
    }
    result
}

/// The lines after a heading mentioning credits, up to the next heading
fn credit_lines(description: &str) -> Vec<&str> {
    let mut result = vec![];
    let mut in_credits = false;

    for line in description.lines() {
        let (text, _) = clean(line);
        if text.len() < 40 && text.to_lowercase().contains("credit") {
            in_credits = true;
        } else if HEADING.is_match(line) {
            // `[h1]-----[/h1]` dividers don't end the section
            let divider = text.chars().all(|c| "-=_ ".contains(c));
            in_credits &= divider;
        } else if in_credits {
            result.push(line);
        }
    }

    result
}

fn parse_line(line: &str) -> Vec<Credit> {
    let (text, links) = clean(line);
    let steam_links: Vec<String> = links
        .into_iter()
        .filter(|link| link.contains("steamcommunity.com/"))
        .collect();
    let single_link = || (steam_links.len() == 1).then(|| steam_links[0].clone());

    // "Sprite art by A and B"
    if let Some(caps) = ROLES_BY.captures(&text) {
        let roles = roles_of(&caps["roles"]);
        if !roles.is_empty() {
            return names_with(&caps["names"], &roles, single_link());
        }
    }

    let Some(caps) = NAME_AND_ROLES.captures(&text) else {
        return vec![];
    };
    let (left, right) = (&caps["name"], &caps["roles"]);
    let (left_roles, right_roles) = (roles_of(left), roles_of(right));

    if !left_roles.is_empty() && right_roles.is_empty() {
        // "Arts: A, B"
        names_with(right, &left_roles, single_link())
    } else if !right_roles.is_empty() {
        names_with(left, &right_roles, steam_links.first().cloned())
    } else {
        vec![]
    }
}

fn names_with(names: &str, roles: &[&'static str], link: Option<String>) -> Vec<Credit> {
    NAME_LIST
        .split(names)
        .filter_map(name)
        .map(|(name, is_uploader)| Credit {
            name,
            roles: roles.to_vec(),
            link: link.clone(),
            is_uploader,
        })
        .collect()
}

/// The cleaned up name, and whether it is the uploader ("Me", "Name (me!)")
fn name(text: &str) -> Option<(String, bool)> {
    let mut is_uploader = false;
    let text = PARENTHESES.replace_all(text, |caps: &regex::Captures| {
        is_uploader |= is_me(&caps[1]);
        ""
    });
    let text = DISCRIMINATOR.replace(&text, "");
    let name = text.trim_matches(|c: char| c.is_whitespace() || "*[]@()!.:-".contains(c));

    if is_me(name) {
        return Some((String::new(), true));
    }
    let too_long = name.chars().count() > 32 || name.split_whitespace().count() > 4;
    // Several words that read like roles ("Character art") aren't a name
    let role_words = name.split_whitespace().count() > 1 && !roles_of(name).is_empty();
    if name.is_empty()
        || too_long
        || role_words
        || NOT_A_NAME.is_match(name)
        || name.starts_with("http")
    {
        return None;
    }
    Some((name.to_string(), is_uploader))
}

fn is_me(text: &str) -> bool {
    let text = text.trim_matches(|c: char| !c.is_alphanumeric());
    ["me", "myself", "i"]
        .iter()
        .any(|me| text.eq_ignore_ascii_case(me))
}

fn roles_of(text: &str) -> Vec<&'static str> {
    let text = text.to_lowercase();
    ROLE_PATTERNS
        .iter()
        .filter(|(_, pattern)| pattern.is_match(&text))
        .map(|(role, _)| *role)
        .collect()
}

/// The line without BBCode and bullets, and the links it had
fn clean(line: &str) -> (String, Vec<String>) {
    let links = URL
        .captures_iter(line)
        .map(|caps| caps[1].to_string())
        .collect();
    let text = URL.replace_all(line, "$2");
    let text = TAG.replace_all(&text, "");
    let text = BULLET.replace(&text, "");
    let text = SYMBOLS.replace(&text, "");
    (text.trim().to_string(), links)
}

#[cfg(test)]
mod tests {
    use super::*;

    fn credits(description: &str) -> Vec<(String, Vec<&'static str>, bool)> {
        parse_credits(description)
            .into_iter()
            .map(|c| (c.name, c.roles, c.is_uploader))
            .collect()
    }

    fn credit(name: &str, roles: &[&'static str]) -> (String, Vec<&'static str>, bool) {
        (name.to_string(), roles.to_vec(), false)
    }

    #[test]
    fn reads_name_dash_roles() {
        let description = "Intro text - not credits\n\
            [h1] [b]Credits[/b] [/h1]\n\
            MoonKanin - Concept, Art, Animation, Writing, Design\n\
            Rehtael - Design, Scripting, Trailer\n\
            Shay - SFX\n\
            \n\
            [h1] [b]Translations[/b] [/h1]\n\
            Foxical - SChinese";
        assert_eq!(
            credits(description),
            [
                credit(
                    "MoonKanin",
                    &["Animation", "Art", "Concept", "Design", "Writing"]
                ),
                credit("Rehtael", &["Design", "Scripting", "Trailer"]),
                credit("Shay", &["Sound"]),
            ]
        );
    }

    #[test]
    fn reads_links_roles_first_and_by() {
        let description = "[h1][b]Credits[/b][/h1]\n\
            [h1]--------------[/h1]\n\
            [b][url=https://steamcommunity.com/id/snorlaxxo]Snorlaxxo[/url][/b]  - Coding; Sounds\n\
            Arts : Chmielu, CaptainSnafu\n\
            Sprite art by RedDye and Turtle.\n\
            💀-[b]Sahlo Qah (Me!)[/b]: Writing\n\
            Black Templar#8655 - Concept";
        let result = parse_credits(description);
        let names: Vec<&str> = result.iter().map(|c| c.name.as_str()).collect();
        assert_eq!(
            names,
            [
                "Snorlaxxo",
                "Chmielu",
                "CaptainSnafu",
                "RedDye",
                "Turtle",
                "Sahlo Qah",
                "Black Templar"
            ]
        );
        assert_eq!(
            result[0].link.as_deref(),
            Some("https://steamcommunity.com/id/snorlaxxo")
        );
        assert_eq!(result[0].roles, ["Scripting", "Sound"]);
        assert_eq!(result[1].roles, ["Art"]);
        assert!(result[5].is_uploader);
    }

    #[test]
    fn skips_prose_and_asset_credits() {
        let description = "Credits:\n\
            Huge thanks to EiraQueenofSnow for drawing this character art.\n\
            A massive thank you to everyone who helped - testing and feedback\n\
            Redhook Studios - original art\n\
            Me: coding";
        assert_eq!(
            credits(description),
            [(String::new(), vec!["Scripting"], true)]
        );
    }
}

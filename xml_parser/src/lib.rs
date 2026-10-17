use std::collections::HashMap;

use quick_xml::events::Event;

pub type LocFile = HashMap<String, Vec<String>>;

// Reads the entries of the first <language> in a .string_table.xml file
pub fn parse_loc_xml(data: String) -> anyhow::Result<LocFile> {
    let mut result: LocFile = HashMap::new();

    let mut reader = quick_xml::Reader::from_str(&data);
    reader.config_mut().trim_text(true);

    let mut lang_started = false;
    let mut current_id = String::default();

    loop {
        match reader.read_event()? {
            Event::Start(tag) => {
                if !lang_started && tag.name().as_ref() == "language" {
                    lang_started = true;
                } else if lang_started
                    && tag.name().as_ref() == "entry"
                    && let Some(id) = tag
                        .attributes()
                        .flatten()
                        .find(|attr| attr.key.as_ref() == "id")
                {
                    current_id = id.value.to_string();
                }
            }
            Event::CData(cdata) => {
                if lang_started && !current_id.is_empty() {
                    // There can be multiple same ids
                    result
                        .entry(std::mem::take(&mut current_id))
                        .or_default()
                        .push(cdata.to_string());
                }
            }
            Event::End(end) => {
                if lang_started && end.name().as_ref() == "language" {
                    break;
                }
            }
            Event::Eof => break,
            _ => {}
        }
    }

    Ok(result)
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn reads_first_language_only() {
        let xml = r#"<?xml version="1.0" encoding="UTF-8"?>
<root>
  <language id="english">
    <entry id="hero_class_name_lamia"><![CDATA[Lamia]]></entry>
    <entry id="dup"><![CDATA[a]]></entry>
    <entry id="dup"><![CDATA[b]]></entry>
  </language>
  <language id="french">
    <entry id="hero_class_name_lamia"><![CDATA[Lamie]]></entry>
  </language>
</root>"#;
        let loc = parse_loc_xml(xml.to_string()).unwrap();
        assert_eq!(loc["hero_class_name_lamia"], ["Lamia"]);
        assert_eq!(loc["dup"], ["a", "b"]);
    }
}

use std::collections::HashMap;

use quick_xml::events::Event;

pub type LocFile = HashMap<String, Vec<String>>;

/// Reads every `<language id="...">` block of a .string_table.xml file, in
/// file order. If the file is malformed further down, the blocks read before
/// the error are still returned.
pub fn parse_loc_xml(data: String) -> anyhow::Result<Vec<(String, LocFile)>> {
    let mut result: Vec<(String, LocFile)> = vec![];

    let mut reader = quick_xml::Reader::from_str(&data);
    reader.config_mut().trim_text(true);

    let mut current_id = String::default();

    loop {
        let event = match reader.read_event() {
            Ok(event) => event,
            Err(_) if !result.is_empty() => break,
            Err(e) => return Err(e.into()),
        };

        match event {
            Event::Start(tag) if tag.name().as_ref() == "language" => {
                let language = tag
                    .attributes()
                    .flatten()
                    .find(|attr| attr.key.as_ref() == "id")
                    .map(|attr| attr.value.to_string())
                    .unwrap_or_default();
                result.push((language, LocFile::new()));
            }
            Event::Start(tag) if tag.name().as_ref() == "entry" => {
                if let Some(id) = tag
                    .attributes()
                    .flatten()
                    .find(|attr| attr.key.as_ref() == "id")
                {
                    current_id = id.value.to_string();
                }
            }
            Event::CData(cdata) => {
                if let Some((_, entries)) = result.last_mut()
                    && !current_id.is_empty()
                {
                    // There can be multiple same ids
                    entries
                        .entry(std::mem::take(&mut current_id))
                        .or_default()
                        .push(cdata.to_string());
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
    fn reads_all_languages() {
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
        assert_eq!(loc.len(), 2);
        assert_eq!(loc[0].0, "english");
        assert_eq!(loc[0].1["hero_class_name_lamia"], ["Lamia"]);
        assert_eq!(loc[0].1["dup"], ["a", "b"]);
        assert_eq!(loc[1].0, "french");
        assert_eq!(loc[1].1["hero_class_name_lamia"], ["Lamie"]);
    }

    #[test]
    fn keeps_blocks_before_malformed_content() {
        let xml = r#"<root><language id="english"><entry id="a"><![CDATA[A]]></entry></language>
<language id="french"><entry id="a"><![CDATA[B]]></bad></language></root>"#;
        let loc = parse_loc_xml(xml.to_string()).unwrap();
        assert_eq!(loc[0].1["a"], ["A"]);
    }
}

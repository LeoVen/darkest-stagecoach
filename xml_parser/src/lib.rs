use std::collections::HashMap;

use quick_xml::events::Event;

pub fn parse_xml(data: String) -> anyhow::Result<HashMap<String, Vec<String>>> {
    let mut result: HashMap<String, Vec<String>> = HashMap::new();
    let mut buf = Vec::with_capacity(data.len());

    let mut reader = quick_xml::Reader::from_str(&data);
    reader.trim_text(true);

    let mut lang_started = false;
    let mut current_id = String::default();

    loop {
        match reader.read_event(&mut buf) {
            Ok(Event::Start(ref tag)) => {
                if !lang_started && tag.name() == b"language" {
                    lang_started = true;
                } else if lang_started && tag.name() == b"entry" {
                    if let Some(Ok(id)) = tag.attributes().find(|attr| {
                        if let Ok(attr) = attr {
                            if attr.key == b"id" {
                                return true;
                            }
                        }
                        false
                    }) {
                        if let Ok(str) = std::str::from_utf8(id.value.as_ref()) {
                            current_id = String::from(str);
                        }
                    }
                }
            }
            Ok(Event::CData(ref cdata)) => {
                if lang_started && !current_id.is_empty() {
                    if let Ok(data) = std::str::from_utf8(cdata.as_ref()) {
                        // There can be multiple same ids
                        if let Some(entry) = result.get_mut(&current_id) {
                            entry.push(data.to_string());
                        } else {
                            _ = result.insert(current_id.clone(), vec![data.to_string()]);
                        }
                    }
                    current_id = String::new();
                }
            }
            Ok(Event::End(ref end)) => {
                if lang_started && end.name() == b"language" {
                    break;
                }
            }
            Ok(Event::Eof) => break,
            Err(e) => return anyhow::Result::Err(e.into()),
            _ => {}
        }
    }

    Ok(result)
}

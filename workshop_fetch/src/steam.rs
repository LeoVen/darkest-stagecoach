use serde::Deserialize;

pub const APP_ID: &str = "262060";

const QUERY_FILES_URL: &str = "https://api.steampowered.com/IPublishedFileService/QueryFiles/v1/";
const DETAILS_URL: &str =
    "https://api.steampowered.com/ISteamRemoteStorage/GetPublishedFileDetails/v1/";

const PER_PAGE: &str = "100";

/// Order of the QueryFiles listing
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum Sort {
    /// Most lifetime subscriptions first
    Subscriptions,
    /// Newest first
    Recent,
}

impl Sort {
    pub fn parse(value: &str) -> anyhow::Result<Self> {
        match value {
            "subs" => Ok(Self::Subscriptions),
            "recent" => Ok(Self::Recent),
            _ => anyhow::bail!("unknown sort {:?}, expected subs or recent", value),
        }
    }

    // EPublishedFileQueryType in SteamDatabase/Protobufs steam/enums.proto
    fn query_type(self) -> &'static str {
        match self {
            Self::Subscriptions => "9", // RankedByTotalUniqueSubscriptions
            Self::Recent => "1",        // RankedByPublicationDate
        }
    }
}

/// A workshop item as returned by QueryFiles and GetPublishedFileDetails.
/// Fields missing from a response default to empty/zero.
#[derive(Debug, Clone, Default, Deserialize)]
#[serde(default)]
pub struct Item {
    pub publishedfileid: String,
    /// Only set by GetPublishedFileDetails; 1 means OK, 9 means not found
    pub result: u32,
    pub title: String,
    pub creator: String,
    pub lifetime_subscriptions: u64,
    pub subscriptions: u64,
    pub time_updated: u64,
    pub tags: Vec<Tag>,
}

#[derive(Debug, Clone, Default, Deserialize)]
#[serde(default)]
pub struct Tag {
    pub tag: String,
}

#[derive(Debug, Default, Deserialize)]
#[serde(default)]
pub struct Page {
    pub total: u64,
    pub next_cursor: Option<String>,
    pub publishedfiledetails: Vec<Item>,
}

#[derive(Deserialize)]
struct Envelope<T> {
    response: T,
}

/// One page of all items of the app in `sort` order. Pass `*` as the cursor
/// for the first page and `next_cursor` afterwards.
pub fn query_files(key: &str, sort: Sort, cursor: &str) -> anyhow::Result<Page> {
    let envelope: Envelope<Page> = ureq::get(QUERY_FILES_URL)
        .query("key", key)
        .query("appid", APP_ID)
        .query("query_type", sort.query_type())
        .query("cursor", cursor)
        .query("numperpage", PER_PAGE)
        .query("return_tags", "true")
        .call()?
        .body_mut()
        .read_json()?;

    Ok(envelope.response)
}

/// Details of specific items. Doesn't need an API key.
pub fn get_details(ids: &[String]) -> anyhow::Result<Vec<Item>> {
    #[derive(Deserialize)]
    struct Details {
        #[serde(default)]
        publishedfiledetails: Vec<Item>,
    }

    let mut form = vec![("itemcount".to_string(), ids.len().to_string())];
    for (i, id) in ids.iter().enumerate() {
        form.push((format!("publishedfileids[{}]", i), id.clone()));
    }

    let envelope: Envelope<Details> = ureq::post(DETAILS_URL)
        .send_form(form)?
        .body_mut()
        .read_json()?;

    Ok(envelope.response.publishedfiledetails)
}

/// Pages through `fetch_page` (in `sort` order, at most `max_pages` pages) and
/// keeps the items with at least `min_subscriptions` lifetime subscriptions.
/// When sorted by subscriptions it also stops after the first page where every
/// item is below the threshold (rather than the first such item, so a
/// slightly unsorted response doesn't cut the listing short).
pub fn collect(
    min_subscriptions: u64,
    sort: Sort,
    max_pages: usize,
    mut fetch_page: impl FnMut(&str) -> anyhow::Result<Page>,
) -> anyhow::Result<Vec<Item>> {
    let mut result = vec![];
    let mut cursor = "*".to_string();

    for _ in 0..max_pages {
        let page = fetch_page(&cursor)?;
        if page.publishedfiledetails.is_empty() {
            break;
        }

        let before = result.len();
        result.extend(
            page.publishedfiledetails
                .into_iter()
                .filter(|item| item.lifetime_subscriptions >= min_subscriptions),
        );

        match page.next_cursor {
            Some(next)
                if !next.is_empty()
                    && next != cursor
                    && (sort == Sort::Recent || result.len() > before) =>
            {
                cursor = next
            }
            _ => break,
        }
    }

    Ok(result)
}

#[cfg(test)]
mod tests {
    use super::*;

    fn item(id: &str, subs: u64) -> Item {
        Item {
            publishedfileid: id.to_string(),
            lifetime_subscriptions: subs,
            ..Default::default()
        }
    }

    fn page(items: Vec<Item>, next: &str) -> Page {
        Page {
            total: 0,
            next_cursor: Some(next.to_string()),
            publishedfiledetails: items,
        }
    }

    #[test]
    fn stops_after_a_page_below_the_threshold() {
        let mut pages = vec![
            page(vec![item("1", 900), item("2", 500)], "b"),
            page(vec![item("3", 450), item("4", 90)], "c"),
            page(vec![item("5", 80), item("6", 70)], "d"),
            page(vec![item("7", 9000)], "e"), // never reached
        ]
        .into_iter();
        let mut cursors = vec![];

        let items = collect(100, Sort::Subscriptions, 1000, |cursor| {
            cursors.push(cursor.to_string());
            Ok(pages.next().unwrap_or_default())
        })
        .unwrap();

        let ids: Vec<&str> = items.iter().map(|i| i.publishedfileid.as_str()).collect();
        assert_eq!(ids, ["1", "2", "3"]);
        assert_eq!(cursors, ["*", "b", "c"]);
    }

    #[test]
    fn recent_keeps_paging_until_max_pages() {
        let mut pages = vec![
            page(vec![item("1", 10), item("2", 900)], "b"),
            page(vec![item("3", 5)], "c"),
            page(vec![item("4", 800)], "d"),
            page(vec![item("5", 9000)], "e"), // beyond max_pages
        ]
        .into_iter();

        let items = collect(100, Sort::Recent, 3, |_| {
            Ok(pages.next().unwrap_or_default())
        })
        .unwrap();

        let ids: Vec<&str> = items.iter().map(|i| i.publishedfileid.as_str()).collect();
        assert_eq!(ids, ["2", "4"]);
    }

    #[test]
    fn parses_query_files_response() {
        let json = r#"{"response":{"total":2,"next_cursor":"AoJ","publishedfiledetails":[
            {"result":1,"publishedfileid":"2418764393","creator":"765","title":"Golem Class Mod",
             "lifetime_subscriptions":94976,"subscriptions":5000,"time_updated":1700000000,
             "file_size":"123","tags":[{"tag":"Class Mod","display_name":"Class Mod"}]}]}}"#;
        let page: Envelope<Page> = serde_json::from_str(json).unwrap();
        let item = &page.response.publishedfiledetails[0];
        assert_eq!(item.publishedfileid, "2418764393");
        assert_eq!(item.lifetime_subscriptions, 94976);
        assert_eq!(item.tags[0].tag, "Class Mod");
        assert_eq!(page.response.next_cursor.as_deref(), Some("AoJ"));
    }
}

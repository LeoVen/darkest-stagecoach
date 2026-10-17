use std::{
    fs::Metadata,
    path::{Path, PathBuf},
};

use futures::{StreamExt, io, select, stream::FuturesUnordered};
use tokio_stream::wrappers::ReadDirStream;

pub async fn find_roots(path: PathBuf) -> io::Result<Vec<PathBuf>> {
    let mut meta_queue = FuturesUnordered::new();
    meta_queue.push(metadata(path));

    let mut entry_queue = FuturesUnordered::new();
    let mut filter_queue = FuturesUnordered::new();

    let mut result = vec![];

    loop {
        select! {
            resolved = meta_queue.select_next_some() => {
                let (path, meta) = resolved?;
                let ft = meta.file_type();
                if ft.is_dir() {
                    let entries_stream = ReadDirStream::new(tokio::fs::read_dir(path).await?);
                    entry_queue.push(StreamExt::into_future(entries_stream));
                } else if ft.is_file() {
                    filter_queue.push(filter_file(path));
                }
            },
            (entry, tail) = entry_queue.select_next_some() => {
                if let Some(Ok(entry)) = entry {
                    entry_queue.push(StreamExt::into_future(tail));
                    meta_queue.push(metadata(entry.path()))
                }
            },
            valid = filter_queue.select_next_some() => {
                if let Some(path) = valid {
                    result.push(path);
                }
            }
            complete => break,
        }
    }

    Ok(result)
}

async fn metadata(path: PathBuf) -> io::Result<(PathBuf, Metadata)> {
    let meta = tokio::fs::symlink_metadata(&path).await?;
    Ok((path, meta))
}

// A class mod root is a `heroes/<name>/` folder containing `<name>.info.darkest`.
// This excludes monsters (`monsters/<name>/<name>_A/...`) and stray files.
async fn filter_file(path: PathBuf) -> Option<PathBuf> {
    if is_hero_info(&path) {
        path.parent().map(PathBuf::from)
    } else {
        None
    }
}

fn is_hero_info(path: &Path) -> bool {
    fn name(path: Option<&Path>) -> Option<&str> {
        path?.file_name()?.to_str()
    }

    let parent = path.parent();
    match (
        name(Some(path)).and_then(|f| f.strip_suffix(".info.darkest")),
        name(parent),
        name(parent.and_then(Path::parent)),
    ) {
        (Some(stem), Some(folder), Some(heroes)) => stem == folder && heroes == "heroes",
        _ => false,
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn matches_only_hero_roots() {
        assert!(is_hero_info(Path::new(
            "123/heroes/lamia/lamia.info.darkest"
        )));
        assert!(!is_hero_info(Path::new(
            "123/monsters/pyre1/pyre1_A/pyre1_A.info.darkest"
        )));
        assert!(!is_hero_info(Path::new(
            "123/heroes/lamia/other.info.darkest"
        )));
        assert!(!is_hero_info(Path::new(
            "123/pre-change-files/x.info.darkest"
        )));
        assert!(!is_hero_info(Path::new("heroes/x/x/x.info.darkest")));
    }
}

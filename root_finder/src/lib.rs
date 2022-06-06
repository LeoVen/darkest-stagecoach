use std::{fs::Metadata, path::PathBuf};

use futures::{io, select, stream::FuturesUnordered, StreamExt};
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
                    entry_queue.push(entries_stream.into_future());
                } else if ft.is_file() {
                    filter_queue.push(filter_file(path));
                }
            },
            (entry, tail) = entry_queue.select_next_some() => {
                if let Some(Ok(entry)) = entry {
                    entry_queue.push(tail.into_future());
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

async fn filter_file(mut path: PathBuf) -> Option<PathBuf> {
    if let Some(file_name) = path.file_name() {
        if let (Some(file_name), Some(path_name)) = (file_name.to_str(), path.to_str()) {
            if file_name.ends_with(".info.darkest") && path_name.contains("hero") {
                if !path.pop() {
                    return None;
                }
                return Some(path);
            }
        }
    }
    None
}

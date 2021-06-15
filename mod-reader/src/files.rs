use std::fs;
use std::fs::Metadata;
use std::path::PathBuf;

use futures::stream::FuturesUnordered;
use futures::{select, StreamExt};
use tokio::io;
use tokio_stream::wrappers::ReadDirStream;

use crate::parse::get_contents;
use crate::types::*;

pub async fn read_directory(path: PathBuf) -> io::Result<(Vec<ClassInfo>, usize)> {
    let mut meta_queue = FuturesUnordered::new();
    meta_queue.push(metadata(path));
    let mut entry_queue = FuturesUnordered::new();
    let mut parse_queue = FuturesUnordered::new();
    let mut result = vec![];
    let mut failed: usize = 0;

    loop {
        select! {
            resolved = meta_queue.select_next_some() => {
                let (path, meta) = resolved?;
                let ft = meta.file_type();
                if ft.is_dir() {
                    let entries_stream = ReadDirStream::new(tokio::fs::read_dir(path).await?);
                    entry_queue.push(entries_stream.into_future());
                } else if ft.is_file() {
                    parse_queue.push(parse_file(path.clone()));
                }
            },
            (entry, tail) = entry_queue.select_next_some() => {
                if let Some(Ok(entry)) = entry {
                    entry_queue.push(tail.into_future());
                    meta_queue.push(metadata(entry.path()))
                }
            },
            class_info = parse_queue.select_next_some() => {
                if let Some(class_info) = class_info? {
                    if !class_info.failed {
                        result.push(class_info);
                    } else {
                        failed += 1;
                    }
                }
            },
            complete => break,
        }
    }

    Ok((result, failed))
}

async fn metadata(path: PathBuf) -> io::Result<(PathBuf, Metadata)> {
    let meta = tokio::fs::symlink_metadata(&path).await?;
    Ok((path, meta))
}

async fn parse_file(path: PathBuf) -> io::Result<Option<ClassInfo>> {
    let path = filter_file(path).await?;
    if let Some(path) = path {
        let file_content = fs::read_to_string(&path)?;
        Ok(get_contents(path, file_content).await)
    } else {
        Ok(None)
    }
}

async fn filter_file(path: PathBuf) -> io::Result<Option<PathBuf>> {
    if let Some(file_name) = path.file_name() {
        if let (Some(file_name), Some(path_name)) = (file_name.to_str(), path.to_str()) {
            if file_name.ends_with(".info.darkest") && path_name.contains("hero") {
                return Ok(Some(path));
            }
        }
    }
    Ok(None)
}

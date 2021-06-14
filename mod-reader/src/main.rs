use std::{fs::Metadata, io, path::PathBuf};

use futures::{select, StreamExt};
use humansize::{file_size_opts, FileSize};
use tokio_stream::wrappers::ReadDirStream;

use futures::stream::FuturesUnordered;

pub async fn read_directory(path: PathBuf) -> io::Result<(u64, u64, u64)> {
    let mut meta_queue = FuturesUnordered::new();
    meta_queue.push(metadata(path));
    let mut entry_queue = FuturesUnordered::new();
    let mut size = 0;
    let mut files = 0;
    let mut dirs = 1;

    loop {
        select! {
            resolved = meta_queue.select_next_some() => {
                let (path, meta) = resolved?;
                let ft = meta.file_type();
                if ft.is_dir() {
                    let entries_stream = ReadDirStream::new(tokio::fs::read_dir(path).await?);
                    entry_queue.push(entries_stream.into_future());
                    dirs += 1;
                } else if ft.is_file() {
                    if let Some(file_name) = path.file_name() {
                        if let (Some(file_name), Some(path)) = (file_name.to_str(), path.to_str()) {
                            if file_name.ends_with(".info.darkest") && path.contains("hero") {
                                println!("{}", file_name);
                            }
                        }
                    }
                    size += meta.len();
                    files += 1;
                }
            },
            (entry, tail) = entry_queue.select_next_some() => {
                if let Some(Ok(entry)) = entry {
                    entry_queue.push(tail.into_future());
                    meta_queue.push(metadata(entry.path()))
                }
            },
            complete => break,
        }
    }

    Ok((files, dirs, size))
}

async fn metadata(path: PathBuf) -> io::Result<(PathBuf, Metadata)> {
    let meta = tokio::fs::symlink_metadata(&path).await?;
    Ok((path, meta))
}

fn main() {
    fn get_path() -> PathBuf {
        let args = std::env::args().into_iter().skip(1).next();
        let folder =
            args.expect("Expected one positional argument containing a file or folder path.");
        PathBuf::from(folder)
    }

    let path = get_path();

    let rt = tokio::runtime::Runtime::new().unwrap();
    match rt.block_on(async { read_directory(path.clone()).await }) {
        Ok((files, dirs, size)) => println!(
            "Files : {}\nDirs  : {}\nSize  : {}",
            files,
            dirs,
            size.file_size(file_size_opts::CONVENTIONAL).unwrap()
        ),
        Err(e) => eprintln!("{}", e),
    }
}

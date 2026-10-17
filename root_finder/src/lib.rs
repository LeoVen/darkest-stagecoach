use std::{
    fs::FileType,
    io,
    path::{Path, PathBuf},
};

use futures::{StreamExt, stream};

// How many directories are read at the same time. Each one holds a file
// descriptor while it's being read, so this keeps us well below the usual
// limit of 1024 open files.
const MAX_OPEN_DIRS: usize = 32;

/// Recursively finds class mod roots (see `is_hero_info`) under `path`.
/// Directories that can't be read are reported and skipped.
pub async fn find_roots(path: PathBuf) -> io::Result<Vec<PathBuf>> {
    let mut result = vec![];
    let mut pending = vec![path];

    // Walk one level at a time, reading each directory to completion so its
    // handle is closed before moving on
    while !pending.is_empty() {
        let mut listings = stream::iter(std::mem::take(&mut pending))
            .map(list_dir)
            .buffer_unordered(MAX_OPEN_DIRS);

        while let Some((dir, entries)) = listings.next().await {
            let entries = match entries {
                Ok(entries) => entries,
                Err(e) => {
                    eprintln!("Skipping {}: {}", dir.display(), e);
                    continue;
                }
            };

            for (path, file_type) in entries {
                if file_type.is_dir() {
                    pending.push(path);
                } else if file_type.is_file() && is_hero_info(&path) {
                    result.extend(path.parent().map(PathBuf::from));
                }
            }
        }
    }

    Ok(result)
}

async fn list_dir(dir: PathBuf) -> (PathBuf, io::Result<Vec<(PathBuf, FileType)>>) {
    let entries = async {
        let mut read_dir = tokio::fs::read_dir(&dir).await?;
        let mut entries = vec![];
        while let Some(entry) = read_dir.next_entry().await? {
            // Doesn't follow symlinks
            entries.push((entry.path(), entry.file_type().await?));
        }
        io::Result::Ok(entries)
    }
    .await;

    (dir, entries)
}

// A class mod root is a `heroes/<name>/` folder containing `<name>.info.darkest`.
// This excludes monsters (`monsters/<name>/<name>_A/...`) and stray files.
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

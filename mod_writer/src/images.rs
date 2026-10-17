use std::{
    collections::HashSet,
    fs,
    path::{Path, PathBuf},
};

/// Saves images into a folder served by the site, named by a hash of their
/// content so identical images (e.g. equipment icons reused across mods) are
/// stored once and file names stay stable between runs.
pub struct ImageStore {
    dir: PathBuf,
    saved: HashSet<String>,
}

impl ImageStore {
    /// Removes old `.jpg` files from `dir` so images of removed mods don't
    /// linger.
    pub fn new(dir: &Path) -> std::io::Result<Self> {
        fs::create_dir_all(dir)?;

        for entry in fs::read_dir(dir)?.flatten() {
            let path = entry.path();
            if path.extension().is_some_and(|ext| ext == "jpg") {
                fs::remove_file(path)?;
            }
        }

        Ok(Self {
            dir: dir.to_path_buf(),
            saved: HashSet::new(),
        })
    }

    /// Returns the path relative to the site's public folder, or an empty
    /// string for an empty image.
    pub fn save(&mut self, image: &[u8]) -> String {
        if image.is_empty() {
            return String::new();
        }

        let name = format!("{:016x}.jpg", fnv1a(image));

        if self.saved.insert(name.clone()) {
            if let Err(e) = fs::write(self.dir.join(&name), image) {
                eprintln!("Failed to write image {}: {}", name, e);
            }
        }

        format!("img/{}", name)
    }

    pub fn len(&self) -> usize {
        self.saved.len()
    }
}

// Stable across Rust versions, unlike DefaultHasher
fn fnv1a(data: &[u8]) -> u64 {
    data.iter().fold(0xcbf29ce484222325, |hash, &byte| {
        (hash ^ byte as u64).wrapping_mul(0x100000001b3)
    })
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn hash_is_stable() {
        assert_eq!(fnv1a(b""), 0xcbf29ce484222325);
        assert_eq!(fnv1a(b"a"), 0xaf63dc4c8601ec8c);
    }
}

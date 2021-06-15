use std::{fs, fs::Metadata, io, path::PathBuf};

use futures::{select, StreamExt};
use lazy_static::lazy_static;
use regex::Regex;
use tokio_stream::wrappers::ReadDirStream;

use futures::stream::FuturesUnordered;

#[derive(Debug, Default)]
pub struct ClassResistances {
    pub stun: f32,
    pub blight: f32,
    pub bleed: f32,
    pub disease: f32,
    pub shuffle: f32,
    pub debuff: f32,
    pub death_blow: f32,
    pub trap: f32,
}

#[derive(Debug, Default)]
pub struct WeaponStats {
    accuracy: f32,
    damage: [f32; 2],
    crit: f32,
    speed: f32,
}

#[derive(Debug, Default)]
pub struct ArmourStats {
    dodge: f32,
    prot: f32,
    hp: f32,
}

#[derive(Debug, Default)]
pub struct ClassStats {
    weapon: [WeaponStats; 5],
    armour: [ArmourStats; 5],
}

#[derive(Debug, Default)]
pub struct ClassInfo {
    pub file_name: String,
    pub res: ClassResistances,
    pub stats: ClassStats,
}

pub async fn read_directory(path: PathBuf) -> io::Result<Vec<ClassInfo>> {
    let mut meta_queue = FuturesUnordered::new();
    meta_queue.push(metadata(path));
    let mut entry_queue = FuturesUnordered::new();
    let mut parse_queue = FuturesUnordered::new();
    let mut result = Vec::new();

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
                    result.push(class_info);
                }
            },
            complete => break,
        }
    }

    Ok(result)
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

lazy_static! {
    static ref RE_RESIST: Regex = Regex::new(r"resistances: (.+)\n").unwrap();
    static ref RE_ARMOUR: Regex = Regex::new(r"").unwrap();
}

async fn get_contents(file_name: PathBuf, data: String) -> Option<ClassInfo> {
    let mut result = ClassInfo::default();
    result.file_name = file_name
        .file_name()
        .unwrap_or_default()
        .to_str()
        .unwrap_or_default()
        .to_string();
    if &result.file_name == &String::default() {
        return None;
    }
    for cap in RE_RESIST.captures_iter(&data) {
        // .stun 40% .poison 20% .bleed 30% .disease 30% .move 40% .debuff 40% .death_blow 67% .trap 20%
        let values = &cap[1];
        let mut keys = vec![];
        let mut vals = vec![];
        for (i, split) in values.split(' ').into_iter().enumerate() {
            if i % 2 == 0 {
                keys.push(split);
            } else {
                if split.ends_with('%') {
                    vals.push(&split[..split.len() - 1]);
                } else {
                    vals.push(split);
                }
            }
        }
        if keys.len() != vals.len() {
            // ??
            return None;
        }
        for (key, val) in keys.into_iter().zip(vals) {
            match key {
                ".stun" => result.res.stun = to_pct(val),
                ".poison" => result.res.blight = to_pct(val),
                ".bleed" => result.res.bleed = to_pct(val),
                ".disease" => result.res.disease = to_pct(val),
                ".move" => result.res.shuffle = to_pct(val),
                ".debuff" => result.res.debuff = to_pct(val),
                ".death_blow" => result.res.death_blow = to_pct(val),
                ".trap" => result.res.trap = to_pct(val),
                _ => {}
            }
        }
    }
    Some(result)
}

fn to_pct(val: &str) -> f32 {
    print!("{} ", val);
    val.parse::<f32>().unwrap_or(1.0) / 100.0
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
        Ok(classes) => {
            for class_info in classes.iter() {
                println!("{:<30} : {:?}", class_info.file_name, class_info.res);
            }
            println!("Found: {} classes", classes.len());
        }
        Err(e) => eprintln!("{}", e),
    }
}

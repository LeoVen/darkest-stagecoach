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
    speed: f32,
}

#[derive(Debug, Default)]
pub struct ClassStats {
    weapon: [WeaponStats; 5],
    armour: [ArmourStats; 5],
}

#[derive(Debug, Default)]
pub struct ClassInfo {
    pub failed: bool,
    pub file_name: String,
    pub res: ClassResistances,
    pub stats: ClassStats,
}

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

async fn get_contents(file_name: PathBuf, data: String) -> Option<ClassInfo> {
    let mut result = ClassInfo::default();
    result.file_name = file_name
        .file_name()
        .unwrap_or_default()
        .to_str()
        .unwrap_or_default()
        .to_string();
    if &result.file_name == &String::default() {
        result.failed = true;
        return Some(result);
    }
    result = resistances(result, &data).await?;
    result = gears(result, &data).await?;
    Some(result)
}

lazy_static! {
    static ref RE_RESIST: Regex = Regex::new(r"resistances: (.+)\n*").unwrap();
}

async fn resistances(mut result: ClassInfo, data: &str) -> Option<ClassInfo> {
    for cap in RE_RESIST.captures_iter(data) {
        // .stun 40% .poison 20% .bleed 30% .disease 30% .move 40% .debuff 40% .death_blow 67% .trap 20%
        let values = &cap[1];
        let mut keys = vec![];
        let mut vals = vec![];
        for (i, split) in values.split(' ').into_iter().enumerate() {
            if i % 2 == 0 {
                keys.push(split);
            } else {
                if split.ends_with("\r") {
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
                ".stun" => result.res.stun = parse_value(val),
                ".poison" => result.res.blight = parse_value(val),
                ".bleed" => result.res.bleed = parse_value(val),
                ".disease" => result.res.disease = parse_value(val),
                ".move" => result.res.shuffle = parse_value(val),
                ".debuff" => result.res.debuff = parse_value(val),
                ".death_blow" => result.res.death_blow = parse_value(val),
                ".trap" => result.res.trap = parse_value(val),
                _ => {}
            }
        }
    }
    Some(result)
}

lazy_static! {
    static ref RE_WEAPON: Regex = Regex::new(r"weapon: .name .+? (\..+)\n*").unwrap();
    static ref RE_ARMOUR: Regex = Regex::new(r"armour: .name .+? (\..+)\n*").unwrap();
}

async fn gears(mut result: ClassInfo, data: &str) -> Option<ClassInfo> {
    for (i, cap) in RE_WEAPON.captures_iter(data).enumerate() {
        // .atk 0% .dmg 8 12 .crit 0% .spd 7
        let values = &cap[1]
            .split(".upgradeRequirementCode")
            .next()
            .unwrap()
            .trim();
        let mut count = 0;
        for (j, split) in values.split_whitespace().enumerate() {
            match j {
                1 => result.stats.weapon[i].accuracy = parse_value(split),
                3 => result.stats.weapon[i].damage[0] = parse_value(split),
                4 => result.stats.weapon[i].damage[1] = parse_value(split),
                6 => result.stats.weapon[i].crit = parse_value(split),
                8 => result.stats.weapon[i].speed = parse_value(split),
                _ => {}
            }
            count += 1;
        }
        if count != 9 {
            return None;
        }
    }
    for (i, cap) in RE_ARMOUR.captures_iter(data).enumerate() {
        // .def 10% .prot 0 .hp 23 .spd 0
        let values = &cap[1]
            .split(".upgradeRequirementCode")
            .next()
            .unwrap()
            .trim();
        let mut count = 0;
        for (j, split) in values.split_whitespace().enumerate() {
            match j {
                1 => result.stats.armour[i].dodge = parse_value(split),
                3 => result.stats.armour[i].prot = parse_value(split),
                5 => result.stats.armour[i].hp = parse_value(split),
                7 => result.stats.armour[i].speed = parse_value(split),
                _ => {}
            }
            count += 1;
        }
        if count != 8 {
            return None;
        }
    }
    Some(result)
}

fn parse_value(val: &str) -> f32 {
    if val.ends_with('%') {
        val[..val.len() - 1]
            .parse::<f32>()
            .unwrap_or_else(|_| 9999.0)
            / 100.0
    } else {
        val.parse::<f32>().unwrap_or_else(|_| 99.0)
    }
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
        Ok((classes, failed)) => {
            for class_info in classes.iter() {
                println!(
                    "{:<15} : {:?}",
                    class_info.file_name.split('.').next().unwrap(),
                    class_info.stats.armour[4]
                );
            }
            println!("Found: {} classes", classes.len());
            println!("{} classes failed to be parsed", failed);
        }
        Err(e) => eprintln!("{}", e),
    }
}

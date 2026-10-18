use std::{collections::HashSet, path::PathBuf};

use exclusions::Exclusions;

use crate::manifest::{Manifest, steamcmd_script};

mod manifest;
mod steam;

const USAGE: &str = "Usage:
  workshop_fetch query [--sort subs|recent] [--min-subs <n>] [--max-pages <n>]
                       [--no-tag-filter] [--replace] [--manifest <mods.json>]
                       [--exclude <exclusions.json>]
      Add hero mods matching the search to the manifest (keeps the mods
      already in it unless --replace), then refresh the creator names.
      Needs STEAM_API_KEY.
  workshop_fetch names [--manifest <mods.json>]
      Refresh only the creators' Steam display names in the manifest.
      Needs STEAM_API_KEY.
  workshop_fetch script [--manifest <mods.json>] [--exclude <exclusions.json>]
                        [--skip-present <dir>] [--limit <n>] [--out <file>]
      Write SteamCMD commands downloading the manifest's mods, leaving out
      excluded ones and those with a folder in <dir>, at most <n> mods.
  workshop_fetch details <id>...
      Print details of workshop items (no API key needed).";

const DEFAULT_MANIFEST: &str = "mods.json";
const DEFAULT_EXCLUSIONS: &str = "exclusions.json";
const DEFAULT_MIN_SUBS: u64 = 5000;
const DEFAULT_MAX_PAGES: usize = 1000;

fn main() {
    let args: Vec<String> = std::env::args().skip(1).collect();

    let result = match args.first().map(String::as_str) {
        Some("query") => query(&args[1..]),
        Some("names") => names(&args[1..]),
        Some("script") => script(&args[1..]),
        Some("details") => details(&args[1..]),
        _ => {
            eprintln!("{}", USAGE);
            std::process::exit(1);
        }
    };

    if let Err(e) = result {
        eprintln!("Error: {:#}", e);
        std::process::exit(1);
    }
}

/// Value following `--name`, if present
fn option(args: &[String], name: &str) -> Option<String> {
    args.iter()
        .position(|arg| arg == name)
        .and_then(|i| args.get(i + 1).cloned())
}

fn exclusions(args: &[String]) -> anyhow::Result<Exclusions> {
    Exclusions::read(
        option(args, "--exclude")
            .unwrap_or(DEFAULT_EXCLUSIONS.into())
            .as_ref(),
    )
}

fn api_key() -> anyhow::Result<String> {
    std::env::var("STEAM_API_KEY")
        .map_err(|_| anyhow::anyhow!("set STEAM_API_KEY (https://steamcommunity.com/dev/apikey)"))
}

/// Fetches the display names of all creators in the manifest
fn refresh_creator_names(key: &str, manifest: &mut Manifest) -> anyhow::Result<()> {
    let creators = manifest.creators();
    let names = steam::get_player_names(key, &creators)?;
    let changed = manifest.set_creator_names(&names);
    println!(
        "Creator names: {} of {} found, {} changed",
        names.len(),
        creators.len(),
        changed
    );
    Ok(())
}

fn names(args: &[String]) -> anyhow::Result<()> {
    let key = api_key()?;
    let path = PathBuf::from(option(args, "--manifest").unwrap_or(DEFAULT_MANIFEST.into()));
    let mut manifest = Manifest::read(&path)
        .map_err(|e| anyhow::anyhow!("failed to read {}: {}", path.display(), e))?;

    refresh_creator_names(&key, &mut manifest)?;

    manifest.write(&path)?;
    println!("Wrote {}", path.display());
    Ok(())
}

fn query(args: &[String]) -> anyhow::Result<()> {
    let key = api_key()?;
    let sort = steam::Sort::parse(&option(args, "--sort").unwrap_or("subs".into()))?;
    let min_subs = match option(args, "--min-subs") {
        Some(n) => n.parse()?,
        None => DEFAULT_MIN_SUBS,
    };
    let max_pages = match option(args, "--max-pages") {
        Some(n) => n.parse()?,
        None => DEFAULT_MAX_PAGES,
    };
    let tag_filter = !args.iter().any(|arg| arg == "--no-tag-filter");
    let replace = args.iter().any(|arg| arg == "--replace");
    let path = PathBuf::from(option(args, "--manifest").unwrap_or(DEFAULT_MANIFEST.into()));
    let exclusions = exclusions(args)?;

    let mut pages = 0;
    let items = steam::collect(min_subs, sort, max_pages, |cursor| {
        pages += 1;
        eprint!("\rFetching page {}...", pages);
        steam::query_files(&key, sort, cursor)
    })?;
    eprintln!();

    let mut manifest = if replace {
        Manifest::default()
    } else {
        Manifest::read(&path).unwrap_or_default()
    };
    let before = manifest.mods.len();
    let merged = manifest.merge(&items, tag_filter);
    let excluded = manifest.remove_excluded(&exclusions);

    println!(
        "{} items with at least {} lifetime subscriptions",
        items.len(),
        min_subs
    );
    for m in &merged.added {
        if !exclusions.excludes_mod(&m.id) {
            println!("  + {} {}", m.id, m.title);
        }
    }
    for m in &excluded {
        println!("  - {} {} (excluded)", m.id, m.title);
    }
    println!(
        "{} -> {} mods: {} added, {} updated, {} excluded",
        before,
        manifest.mods.len(),
        merged.added.len()
            - merged
                .added
                .iter()
                .filter(|m| exclusions.excludes_mod(&m.id))
                .count(),
        merged.updated,
        excluded.len()
    );

    refresh_creator_names(&key, &mut manifest)?;

    manifest.write(&path)?;
    println!("Wrote {}", path.display());
    Ok(())
}

fn script(args: &[String]) -> anyhow::Result<()> {
    let manifest_path = option(args, "--manifest").unwrap_or(DEFAULT_MANIFEST.into());
    let mut manifest = Manifest::read(manifest_path.as_ref())
        .map_err(|e| anyhow::anyhow!("failed to read {}: {}", manifest_path, e))?;
    manifest.remove_excluded(&exclusions(args)?);
    let limit = match option(args, "--limit") {
        Some(n) => n.parse()?,
        None => usize::MAX,
    };

    // Folder names in the SteamCMD content folder are workshop IDs
    let present: HashSet<String> = match option(args, "--skip-present") {
        Some(dir) => match std::fs::read_dir(&dir) {
            Ok(entries) => entries
                .flatten()
                .filter_map(|entry| entry.file_name().into_string().ok())
                .collect(),
            Err(_) => HashSet::new(), // nothing downloaded yet
        },
        None => HashSet::new(),
    };

    let missing = manifest.missing(&present).count();
    let batch = missing.min(limit);
    let script = steamcmd_script(manifest.missing(&present).take(limit));

    eprintln!(
        "{} of {} mods already present, {} in this batch, {} left after it",
        manifest.mods.len() - missing,
        manifest.mods.len(),
        batch,
        missing - batch
    );

    match option(args, "--out") {
        Some(out) => std::fs::write(&out, script)?,
        None => print!("{}", script),
    }
    Ok(())
}

fn details(ids: &[String]) -> anyhow::Result<()> {
    if ids.is_empty() {
        anyhow::bail!("{}", USAGE);
    }

    for item in steam::get_details(ids)? {
        if item.result != 1 {
            println!(
                "{}: not found (result {})",
                item.publishedfileid, item.result
            );
            continue;
        }
        let tags: Vec<&str> = item.tags.iter().map(|t| t.tag.as_str()).collect();
        println!(
            "{}: {} | {} lifetime subs | hero tags: {} | tags: {}",
            item.publishedfileid,
            item.title.trim(),
            item.lifetime_subscriptions,
            manifest::has_hero_tag(&item),
            tags.join(", ")
        );
    }
    Ok(())
}

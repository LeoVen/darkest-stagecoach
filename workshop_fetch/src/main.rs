use std::{collections::HashSet, path::PathBuf};

use crate::manifest::Manifest;

mod manifest;
mod steam;

const USAGE: &str = "Usage:
  workshop_fetch query [--min-subs <n>] [--no-tag-filter] [--out <mods.json>]
      List popular hero mods into a manifest. Needs STEAM_API_KEY.
  workshop_fetch script [--manifest <mods.json>] [--out <file>]
      Write SteamCMD commands downloading every mod in the manifest.
  workshop_fetch details <id>...
      Print details of workshop items (no API key needed).";

const DEFAULT_MANIFEST: &str = "mods.json";
const DEFAULT_MIN_SUBS: u64 = 5000;

fn main() {
    let args: Vec<String> = std::env::args().skip(1).collect();

    let result = match args.first().map(String::as_str) {
        Some("query") => query(&args[1..]),
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

fn query(args: &[String]) -> anyhow::Result<()> {
    let key = std::env::var("STEAM_API_KEY").map_err(|_| {
        anyhow::anyhow!("set STEAM_API_KEY (https://steamcommunity.com/dev/apikey)")
    })?;
    let min_subs = match option(args, "--min-subs") {
        Some(n) => n.parse()?,
        None => DEFAULT_MIN_SUBS,
    };
    let tag_filter = !args.iter().any(|arg| arg == "--no-tag-filter");
    let out = PathBuf::from(option(args, "--out").unwrap_or(DEFAULT_MANIFEST.into()));

    let mut pages = 0;
    let items = steam::collect_popular(min_subs, |cursor| {
        pages += 1;
        eprint!("\rFetching page {}...", pages);
        steam::query_files(&key, cursor)
    })?;
    eprintln!();

    let manifest = Manifest::new(min_subs, tag_filter, &items);
    println!(
        "{} items with at least {} lifetime subscriptions, {} kept{}",
        items.len(),
        min_subs,
        manifest.mods.len(),
        if tag_filter { " by hero tags" } else { "" }
    );

    // Show what changed compared to the current manifest
    let old = Manifest::read(&out).unwrap_or_default();
    let old_ids: HashSet<&str> = old.mods.iter().map(|m| m.id.as_str()).collect();
    let new_ids: HashSet<&str> = manifest.mods.iter().map(|m| m.id.as_str()).collect();
    for m in manifest
        .mods
        .iter()
        .filter(|m| !old_ids.contains(m.id.as_str()))
    {
        println!("  + {} {}", m.id, m.title);
    }
    for m in old.mods.iter().filter(|m| !new_ids.contains(m.id.as_str())) {
        println!("  - {} {}", m.id, m.title);
    }

    manifest.write(&out)?;
    println!("Wrote {}", out.display());
    Ok(())
}

fn script(args: &[String]) -> anyhow::Result<()> {
    let manifest_path = option(args, "--manifest").unwrap_or(DEFAULT_MANIFEST.into());
    let manifest = Manifest::read(manifest_path.as_ref())
        .map_err(|e| anyhow::anyhow!("failed to read {}: {}", manifest_path, e))?;
    let script = manifest.steamcmd_script();

    match option(args, "--out") {
        Some(out) => {
            std::fs::write(&out, script)?;
            eprintln!("Wrote {} downloads to {}", manifest.mods.len(), out);
        }
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

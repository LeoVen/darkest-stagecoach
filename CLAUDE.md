# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Darkest Stagecoach is a static website for browsing Darkest Dungeon class mods (deployed at https://dds.leoven.dev via GitHub Pages from `docs/`). The repo has two halves:

- `darkest-stagecoach/`: the React 19 + TypeScript site (Vite, MUI v9 with Emotion, FontAwesome).
- A Cargo workspace at the root (`parser`, `root_finder`, `mod_reader`, `mod_parser`, `xml_parser`, `img_compr`, `mod_writer`). Together these crates read the class mod folders on disk and generate the TypeScript data files the site uses. Edition 2024; all dependency versions live in `[workspace.dependencies]` in the root `Cargo.toml`, and member crates use `dep.workspace = true`.

## Commands

A root `justfile` wraps the common commands: `just` lists them (`dev`, `build`, `preview`, `check`, `test`, `generate`, `deploy`, ...). The underlying commands:

Frontend (run from `darkest-stagecoach/`):

```sh
npm start          # Vite dev server
npm run typecheck  # tsc --noEmit (Vite itself doesn't typecheck)
npm run build      # typecheck + production build into build/
npm run preview    # serve build/ locally
npm run docs       # build and replace ../docs (the deployed GitHub Pages output)
```

There are no frontend tests. `index.html` lives at the project root (Vite convention); everything in `public/` (including `CNAME` for the custom domain and the generated `img/`) is copied into the build as-is.

Rust (run from the repo root):

```sh
cargo build
cargo test --workspace            # unit tests
cargo clippy --workspace --all-targets
cargo fmt --all
cargo test -p parser <test_name>  # single test

# Regenerate the site data (WSL paths; base game + DLC heroes, then workshop mods)
cargo run --release --bin mod_writer -- \
  --images darkest-stagecoach/public/img \
  "/mnt/c/Program Files (x86)/Steam/steamapps/common/DarkestDungeon" \
  "/mnt/c/Program Files (x86)/Steam/steamapps/workshop/content/262060" \
  darkest-stagecoach/src/data/data
```

`mod_writer --images <image_dir> <input_dir>... <output_dir>` is the real entry point for data generation. Once the mods have been read, it replaces the previously generated `.jpg` files in the image dir and `Class_*.tsx`/`index.tsx` in the output dir, so removed mods disappear; if reading fails, nothing is touched. The `main.rs` files in `root_finder`, `parser`, `xml_parser` and `img_compr` are scratch drivers with hardcoded Windows paths, not real CLIs.

Formatting: Prettier settings live in `darkest-stagecoach/package.json` (4 spaces, no semicolons, single quotes, `arrowParens: avoid`, `jsxBracketSameLine`). The Rust code is `cargo fmt` clean.

## Data pipeline (Rust → TS)

`mod_writer` → `mod_reader::read_mods` → `mod_parser::proc_class_mod` → `fixer::fix_classes` → writes the `.tsx` files.

1. `root_finder` searches the input dir recursively (async, tokio) for class mod roots: any `heroes/<name>/` folder containing `<name>.info.darkest`. This skips monsters and other non-hero mods in the workshop folder.
2. `mod_reader` reads each root's `<name>.info.darkest` and `<name>.art.darkest` files (parsed by `parser`), its localization XML (parsed by `xml_parser`), the roster portrait, skill icons, the guild header and the equipment icons. Images are re-encoded to JPEG quality 50 by `img_compr` (the crate is named `png_compr` in its Cargo.toml) and carried as raw bytes. Localization comes from the nearest `localization/` folder above the hero (DLC heroes are nested under `dlc/<id>/features/...`). All `<language>` blocks of all `.string_table.xml` files are read (in sorted file order); english entries win and other languages only fill ids english lacks, so the result doesn't depend on file names or filesystem order; mods that ship only compiled `.loc2` files get a name derived from the key. The Steam ID is the numeric workshop folder name; base game and DLC heroes have none and get no Steam source.
3. `mod_parser` turns the raw `DarkestFile` (`Vec<(key, HashMap<field, Vec<String>>)>`) into `ClassInfo` (stats, resistances, skills, religious/transform tags, and the original-hero flag).
4. `mod_writer` sorts by key (base game first), then `fixer.rs` replaces `-` with `_` in keys and appends a dedupe counter. Every key therefore ends in a number (`vestal1`, `2andb1`), and the generated files are named `Class_<key>.tsx`.
5. `writer.rs` writes one `Class_<key>.tsx` per mod, exporting a `ClassModData`, plus an `index.tsx` exporting `classModDataIndex()`. `images.rs` saves each image once to `public/img/<content hash>.jpg`, and the data only holds that path (`''` when missing). The frontend `Image` component prefixes `import.meta.env.BASE_URL` and lazy-loads it. Don't embed images in the JS bundle again.

**`darkest-stagecoach/src/data/data/` and `darkest-stagecoach/public/img/` are generated and committed.** Don't hand-edit those files; regenerate them. If the TS shape needs to change, change `make_code` in `mod_writer/src/writer.rs`, the types in `mod_parser/src/types.rs` (their `Display` impls emit the TS literals) and `ClassModData` in `src/data/ClassMod.tsx` together.

## Frontend data model

Each `ClassMod` merges two independent sources, joined by the same key in `src/data/ClassModIndex.tsx`:

- `data: ClassModData`: generated (see above).
- `info: ClassModInfo`: hand-written curation in `src/data/info/Class_<key>.tsx` (description, class-type ratings, synergies, authors, extra sources), registered in `src/data/info/index.tsx`. Keys must match the generated keys, including the numeric suffix. Missing entries fall back to `defaultClassModInfo()`.

Authors live in `src/data/authors/Author_<Name>.tsx` and are registered in `src/data/AuthorIndex.tsx`. They are referenced from `info.authors[].authorKey`.

Enums such as `Synergy`, `OriginalHeroes` and `ClassModType` are string-literal unions in `src/Types.tsx`. The display order of synergies is defined in `src/Synergy.tsx`.

Styling: everything uses Emotion through MUI. MUI components are themed in `src/theme.tsx` (`components.<Name>.styleOverrides`); app-specific styles live in `styles.tsx` files using `styled` from `@mui/material/styles` (template-literal CSS, colors from CSS variables in `index.css`). Style-only props are prefixed with `$` and need the `transient` option from `src/styled.ts` (`styled('div', transient)<{ $selected: boolean }>`), otherwise they're forwarded to the component/DOM. `StyledEngineProvider injectFirst` loads Emotion styles first so `index.css` can override them. Don't add styled-components back.

`App.tsx` holds the filter/sort state and a list of class keys. Filtering (`Filtering.tsx`) and sorting (`Sorting.tsx`) work on keys and look each class up in the global `ClassModIndex`. Components live in `src/components/<Name>/{index,styles}.tsx` (MUI `styled` components in `styles.tsx`). The theme is in `src/theme.tsx`. App-wide toasts go through `SnackbarContext`.

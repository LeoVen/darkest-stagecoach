# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Darkest Stagecoach is a static website for browsing Darkest Dungeon class mods (deployed at https://dds.leoven.dev via GitHub Pages from `docs/`). The repo has two halves:

- `darkest-stagecoach/`: the React 17 + TypeScript site (Create React App / `react-scripts` 4, Material-UI v4, styled-components).
- A Cargo workspace at the root (`parser`, `root_finder`, `mod_reader`, `mod_parser`, `xml_parser`, `img_compr`, `mod_writer`). Together these crates read the class mod folders on disk and generate the TypeScript data files the site uses.

## Commands

Frontend (run from `darkest-stagecoach/`):

```sh
npm start          # dev server
npm run build      # production build into build/
npm run docs       # build and replace ../docs (the deployed GitHub Pages output, incl. CNAME)
npm test           # react-scripts/jest (no tests currently exist)
```

The `start`/`build`/`docs` scripts set `NODE_OPTIONS=--openssl-legacy-provider` because react-scripts 4 (webpack 4) fails on Node 17+ without it.

Rust (run from the repo root):

```sh
cargo build
cargo run --bin mod_writer -- <mods_input_dir> <output_dir>
```

`mod_writer` is the real entry point for data generation. The output dir is normally `darkest-stagecoach/src/data/data` (see `.vscode/tasks.json`). The `main.rs` files in `root_finder`, `parser`, `xml_parser` and `img_compr` are scratch drivers with hardcoded Windows paths, not real CLIs. There are no Rust tests.

Formatting: Prettier settings live in `darkest-stagecoach/package.json` (4 spaces, no semicolons, single quotes, `arrowParens: avoid`, `jsxBracketSameLine`). Use rustfmt for the Rust code.

## Data pipeline (Rust → TS)

`mod_writer` → `mod_reader::read_mods` → `mod_parser::proc_class_mod` → `fixer::fix_classes` → writes the `.tsx` files.

1. `root_finder` searches the input dir recursively (async, tokio) for class mod root folders.
2. `mod_reader` reads each root's `<name>.info.darkest` and `<name>.art.darkest` files (parsed by `parser`), its localization XML (parsed by `xml_parser`), the roster portrait, skill icons, the guild header and the equipment icons. Images are re-encoded to JPEG quality 50 by `img_compr` (the crate is named `png_compr` in its Cargo.toml) and embedded as base64 strings. `ModReader::file_exceptions` maps vanilla heroes to the loc file names they use.
3. `mod_parser` turns the raw `DarkestFile` (`Vec<(key, HashMap<field, Vec<String>>)>`) into `ClassInfo` (stats, resistances, skills, religious/transform tags, and the original-hero flag).
4. `mod_writer/fixer.rs` replaces `-` with `_` in keys and appends a dedupe counter. Every key therefore ends in a number (`vestal1`, `2andb1`), and the generated files are named `Class_<key>.tsx`.
5. `writer.rs` writes one `Class_<key>.tsx` per mod, exporting a `ClassModData`, plus an `index.tsx` exporting `classModDataIndex()`.

**`darkest-stagecoach/src/data/data/` is gitignored and generated.** The site will not compile until you run `mod_writer` to create it. Don't hand-edit those files. If the TS shape needs to change, change `make_code` in `mod_writer/src/writer.rs`, the types in `mod_parser/src/types.rs` (their `Display` impls emit the TS literals) and `ClassModData` in `src/data/ClassMod.tsx` together.

## Frontend data model

Each `ClassMod` merges two independent sources, joined by the same key in `src/data/ClassModIndex.tsx`:

- `data: ClassModData`: generated (see above).
- `info: ClassModInfo`: hand-written curation in `src/data/info/Class_<key>.tsx` (description, class-type ratings, synergies, authors, extra sources), registered in `src/data/info/index.tsx`. Keys must match the generated keys, including the numeric suffix. Missing entries fall back to `defaultClassModInfo()`.

Authors live in `src/data/authors/Author_<Name>.tsx` and are registered in `src/data/AuthorIndex.tsx`. They are referenced from `info.authors[].authorKey`.

Enums such as `Synergy`, `OriginalHeroes` and `ClassModType` are string-literal unions in `src/Types.tsx`. The display order of synergies is defined in `src/Synergy.tsx`.

`App.tsx` holds the filter/sort state and a list of class keys. Filtering (`Filtering.tsx`) and sorting (`Sorting.tsx`) work on keys and look each class up in the global `ClassModIndex`. Components live in `src/components/<Name>/{index,styles}.tsx` (styled-components in `styles.tsx`). The theme is in `src/theme.tsx`. App-wide toasts go through `SnackbarContext`.

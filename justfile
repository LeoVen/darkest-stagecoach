# Run `just` to list recipes

# Loads STEAM_API_KEY from a local .env (gitignored)
set dotenv-load

web := "darkest-stagecoach"

# Where SteamCMD puts mods downloaded by `just download`
steam_dir := env("HOME") / ".cache/darkest-stagecoach/steam"
steam_workshop := steam_dir / "steamapps/workshop/content/262060"

# Inputs of `just generate`: the game (base and DLC heroes) and the downloaded
# workshop mods. Override with `just game=... workshop=... generate`
game := "/mnt/c/Program Files (x86)/Steam/steamapps/common/DarkestDungeon"
workshop := steam_workshop

default:
    @just --list

# Install frontend dependencies
install:
    cd {{web}} && npm ci

# Start the Vite dev server
dev:
    cd {{web}} && npm start

# Production build into darkest-stagecoach/build
build:
    cd {{web}} && npm run build

# Build and serve the production build locally
preview: build
    cd {{web}} && npm run preview

# Typecheck the frontend
typecheck:
    cd {{web}} && npm run typecheck

# Run the Rust tests
test:
    cargo test --workspace

# Format the Rust code
fmt:
    cargo fmt --all

# Everything CI-like: formatting, lints, tests and the frontend typecheck
check: typecheck
    cargo fmt --all --check
    cargo clippy --workspace --all-targets
    cargo test --workspace

# Regenerate class data and images from the game and workshop folders
generate:
    cargo run --release --bin mod_writer -- \
        --images {{web}}/public/img \
        --exclude exclusions.json \
        --report incomplete.json \
        "{{game}}" \
        "{{workshop}}" \
        {{web}}/src/data/data

# Examples:
#   just fetch                                               most subscribed, >= 5000
#   just fetch --sort recent --min-subs 300 --max-pages 5    new mods
# Merges into the existing list; excluded mods are left out.
# Add hero mods from a Steam workshop search to mods.json (needs STEAM_API_KEY)
fetch *args:
    cargo run --release --bin workshop_fetch -- query {{args}}

# Refresh the creators' Steam display names in mods.json (needs STEAM_API_KEY;
# `just fetch` does this too)
names:
    cargo run --release --bin workshop_fetch -- names

# Download mods from mods.json that aren't downloaded yet, at most `batch` per
# SteamCMD session (long sessions get throttled). Run again for the next batch.
# Needs an account that owns the game.
download steam_user batch="100":
    mkdir -p "{{steam_dir}}"
    cargo run --release --bin workshop_fetch -- script --skip-present "{{steam_workshop}}" --limit {{batch}} --out "{{steam_dir}}/downloads.txt"
    if [ -s "{{steam_dir}}/downloads.txt" ]; then steamcmd +force_install_dir "{{steam_dir}}" +login {{steam_user}} +runscript "{{steam_dir}}/downloads.txt" +quit; else echo "Nothing left to download"; fi

# Fetch, download and generate data from the downloaded mods
sync steam_user: fetch (download steam_user) generate

# One-time: install what Ansible's apt module needs on the VPS. Uses the raw
# module (a plain command over SSH), which works before python3-apt exists.
infra-bootstrap:
    cd infra && ansible servers -m ansible.builtin.raw -a "apt-get install -y python3-apt" --become --ask-become-pass

# Preview what Ansible would change on the VPS (asks for your sudo password)
infra-check:
    cd infra && ansible-playbook site.yml --check --diff --ask-become-pass

# Apply the Ansible configuration to the VPS
infra-apply:
    cd infra && ansible-playbook site.yml --diff --ask-become-pass

# Rebuild docs/ for GitHub Pages (commit and push to publish)
deploy:
    cd {{web}} && npm run docs

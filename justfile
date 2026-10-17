# Run `just` to list recipes

web := "darkest-stagecoach"

# Darkest Dungeon install and workshop folders (WSL paths), override with
# `just game=... workshop=... generate`
game := "/mnt/c/Program Files (x86)/Steam/steamapps/common/DarkestDungeon"
workshop := "/mnt/c/Program Files (x86)/Steam/steamapps/workshop/content/262060"

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
        "{{game}}" \
        "{{workshop}}" \
        {{web}}/src/data/data

# Rebuild docs/ for GitHub Pages (commit and push to publish)
deploy:
    cd {{web}} && npm run docs

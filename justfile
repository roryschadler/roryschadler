default:
  just --list

# Build the site
build:
  tsc
  vite build

# Deploy the site with the provided message using the gh-pages CLI
deploy MESSAGE: build
  gh-pages --message '{{MESSAGE}}' --dist dist --repo "https://github.com/roryschadler/roryschadler.github.io.git"

lint:
  eslint ./src
  tsc --noEmit

fix:
  eslint --fix ./src

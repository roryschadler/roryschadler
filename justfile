default:
  just --list

# Build the site
build:
  yarn tsc
  yarn vite build

# Deploy the site with the provided message using the gh-pages CLI
deploy MESSAGE: build
  yarn gh-pages --message '{{MESSAGE}}' --dist dist --repo "https://github.com/roryschadler/roryschadler.github.io.git"

lint:
  yarn eslint ./src
  yarn tsc --noEmit

fix:
  yarn eslint --fix ./src

preview: build
  yarn vite preview

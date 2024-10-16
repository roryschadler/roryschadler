default:
  just --list

# Build the site
build:
  yarn tsc
  yarn vite build

version_bump MESSAGE VERSION_BUMP:
  #!/usr/bin/env bash
  set -euxo pipefail
  yarn version {{VERSION_BUMP}}
  version=$(jq -r '.version' package.json)
  git add .
  git commit -m "v${version}: {{MESSAGE}}"
  git push
  git tag v${version}
  git push --tags

# Deploy the site with the provided message using the gh-pages CLI
deploy MESSAGE VERSION_BUMP="minor": (version_bump MESSAGE VERSION_BUMP) build
  yarn gh-pages --message '{{MESSAGE}}' --dist dist --repo "https://github.com/roryschadler/roryschadler.github.io.git"

lint:
  yarn eslint ./src
  yarn tsc --noEmit

fix:
  yarn eslint --fix ./src

preview: build
  yarn vite preview

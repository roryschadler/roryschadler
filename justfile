default:
  just --list

# Build the site
build:
  yarn tsc
  yarn vite build

version_bump MESSAGE VERSION_BUMP:
  yarn version {{VERSION_BUMP}}
  git add .
  git commit -m "v{{VERSION_BUMP}}: {{MESSAGE}}"
  git push
  git tag v{{VERSION_BUMP}}
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

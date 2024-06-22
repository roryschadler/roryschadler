# roryschadler

This repository contains the source code for my personal website,
[roryschadler.me](https://roryschadler.me). It is a React single-page
application, bundled with Vite, and deployed to GitHub Pages via
<https://github.com/roryschadler/roryschadler.github.io>.

## Local Development

To run locally, first install dependencies:

```shell
# Install nvm and Node.js
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
nvm install 20
# if you've never installed yarn before
corepack enable

yarn install
```

Then, run the development server:

```shell
yarn dev
```

Open <http://localhost:5173> to view the site in your browser.

For more information about Cypress tests, see the [Cypress
README](./cypress/README.md). For more information about the GitHub Pages
Deployment, see [BUILD.md](./BUILD.md).

# Cypress E2E Testing

## Local Development

First, run the development server:

```shell
yarn dev
```

Then, start Cypress in a separate terminal session

```shell
yarn cypress:open
```

## GitHub Actions

Cypress tests are run on every push to the `main` branch. See the [GitHub
Actions Workflow](../.github/workflows/cypress.yml) for more details.

To see the results of the latest run, visit [the Cypress
project](https://cloud.cypress.io/projects/39ri8w/runs).

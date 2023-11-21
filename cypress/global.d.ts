/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    getByLabel(
      label: string,
      args?: Partial<
        Cypress.Loggable &
          Cypress.Timeoutable &
          Cypress.Withinable &
          Cypress.Shadow
      >
    ): Chainable<JQuery<HTMLElement>>;
    getByLabelLike(
      labelPrefix: string,
      args?: Partial<
        Cypress.Loggable &
          Cypress.Timeoutable &
          Cypress.Withinable &
          Cypress.Shadow
      >
    ): Chainable<JQuery<HTMLElement>>;

    getByTestId(
      testId: string,
      args?: Partial<
        Cypress.Loggable &
          Cypress.Timeoutable &
          Cypress.Withinable &
          Cypress.Shadow
      >
    ): Chainable<JQuery<HTMLElement>>;
    getByTestIdLike(
      testIdPrefix: string,
      args?: Partial<
        Cypress.Loggable &
          Cypress.Timeoutable &
          Cypress.Withinable &
          Cypress.Shadow
      >
    ): Chainable<JQuery<HTMLElement>>;
  }
}

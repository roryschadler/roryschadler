Cypress.Commands.add('getByLabel', (label, ...args) => {
  return cy.get(`[aria-label="${label}"]`, ...args);
});

Cypress.Commands.add('getByLabelLike', (label, ...args) => {
  return cy.get(`[aria-label*="${label}"]`, ...args);
});

Cypress.Commands.add('getByTestId', (testId, ...args) => {
  return cy.get(`[data-testid="${testId}"]`, ...args);
});

Cypress.Commands.add('getByTestIdLike', (testId, ...args) => {
  return cy.get(`[data-testid*="${testId}"]`, ...args);
});

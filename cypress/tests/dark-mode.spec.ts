const stubMatchMedia = (prefersDark: boolean, win: Cypress.AUTWindow) => {
  cy.stub(win, 'matchMedia')
    .callThrough()
    .withArgs('(prefers-color-scheme: dark)')
    .returns({
      matches: prefersDark,
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      addListener: () => {},
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      removeListener: () => {},
    });
};

describe('theme', () => {
  it('should automatically be dark mode when the user prefers it', () => {
    cy.visit('/', {
      onBeforeLoad(win) {
        stubMatchMedia(true, win);
      },
    });

    cy.get('body').should('have.css', 'color-scheme', 'dark');
  });

  it('should automatically be light mode when the user prefers it', () => {
    cy.visit('/', {
      onBeforeLoad(win) {
        stubMatchMedia(false, win);
      },
    });
  });

  describe('dark mode button', () => {
    it('should toggle dark mode', () => {
      cy.visit('/', {
        onBeforeLoad(win) {
          stubMatchMedia(false, win);
        },
      });
      cy.get('body').should('have.css', 'color-scheme', 'light');
      cy.getByLabelLike('Switch to')
        .click()
        .then(() => {
          cy.get('body').should('have.css', 'color-scheme', 'dark');
          cy.getByLabelLike('Switch to')
            .click()
            .then(() => {
              cy.get('body').should('have.css', 'color-scheme', 'light');
            });
        });
    });
  });
});

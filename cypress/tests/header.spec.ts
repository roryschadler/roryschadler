describe('header bar', () => {
  it('should render the header bar', () => {
    cy.visit('/');
    cy.get('h1').should('contain', 'Rory Schadler');
  });

  it('should render the dark mode button', () => {
    cy.visit('/');
    cy.getByLabelLike('Switch to').should('exist');
  });

  it('should render the github button', () => {
    cy.visit('/');
    cy.getByTestId('GitHubIcon').should('exist').and('be.visible');
    cy.getByLabel('GitHub')
      .parent()
      .should('have.attr', 'href')
      .and('match', /github\.com/);
  });

  it('should render the linkedin button', () => {
    cy.visit('/');
    cy.getByTestId('LinkedInIcon').should('exist').and('be.visible');
    cy.getByLabel('LinkedIn')
      .parent()
      .should('have.attr', 'href')
      .and('match', /linkedin\.com/);
  });

  it('should render the avatar', () => {
    cy.visit('/');
    cy.getByLabelLike('Contact Me')
      .should('exist')
      .parent()
      .should('have.attr', 'href')
      .and('match', /linkedin\.com/);
  });
});

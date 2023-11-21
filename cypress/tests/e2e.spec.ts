describe('homepage', () => {
  it('should render the homepage', () => {
    cy.visit('/');
    cy.get('h1').should('contain', 'Rory Schadler');
  });
});

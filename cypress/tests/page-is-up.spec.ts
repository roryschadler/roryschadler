// leaving this short as a quick e2e test that can run daily
describe('homepage', () => {
  it('should render the homepage', () => {
    cy.visit('/');
    cy.get('h1').should('contain', 'Rory Schadler');
  });
});

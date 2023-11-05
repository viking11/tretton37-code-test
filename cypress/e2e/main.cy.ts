describe('Main test', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
  });

  it('Goes to local page and searches for a person', () => {
    cy.visit('http://localhost:5173/');
    cy.wait(1000);
    cy.get('#officeSelect').click();
    cy.get('#office0').click();
    cy.get('#searchField').type('sandra');
    cy.get('#colleague > p').first().contains('Sandra');
  });
});

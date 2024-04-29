describe('rendering the game board', () => {
  it('renders the board with 9 squares', () => {
    cy.visit('http://localhost:3000');

    cy.get('.square').should('have.length', 9);
  });

  it('fill square with X when first square is clicked', () => {
    cy.visit('http://localhost:3000');

    cy.get('.square').first().click();

    cy.get('.square').first().should('have.text', 'X');
  });
})


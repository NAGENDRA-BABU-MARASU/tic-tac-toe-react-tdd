describe("playing the game correctly", () => {
  it('should alternate between O and X while clicking the buttons', () => {
    cy.visit('http://localhost:3000');

    cy.get('[data-testid="square0"]').click();

    cy.get('[data-testid="square0"]').should('have.text', 'X');

    cy.get('[data-testid="square1"]').click();

    cy.get('[data-testid="square1"]').should('have.text', 'O');

    cy.get('[data-testid="square2"]').click();

    cy.get('[data-testid="square2"]').should('have.text', 'X');
  });
})
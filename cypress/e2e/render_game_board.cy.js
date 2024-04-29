/* eslint-disable no-undef */
describe('rendering the game board', () => {
  it('renders the board with 9 squares', () => {
    const squaresCount = 9;

    cy.visit('http://localhost:3000');

    cy.get('.square').should('have.length', squaresCount);
  });

  it('fill square with X when first square is clicked', () => {
    const expectedTextValue = "X";

    cy.visit('http://localhost:3000');

    cy.get('.square').first().click();

    cy.get('.square').first().should('have.text', expectedTextValue);
  });
})


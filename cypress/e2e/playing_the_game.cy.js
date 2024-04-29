/* eslint-disable no-undef */
describe("playing the game correctly", () => {
  it('should alternate between O and X while clicking the buttons', () => {
    const player1TurnValue = "X";
    const player2TurnValue = "O";

    cy.visit('http://localhost:3000');

    cy.get('[data-testid="square0"]').click();

    cy.get('[data-testid="square0"]').should('have.text', player1TurnValue);

    cy.get('[data-testid="square1"]').click();

    cy.get('[data-testid="square1"]').should('have.text', player2TurnValue);

    cy.get('[data-testid="square2"]').click();

    cy.get('[data-testid="square2"]').should('have.text', player1TurnValue);
  });

  it('should declare and display the winner correctly', () => {
    const expectedWinnerStatus = 'Winner: X';

    cy.visit('http://localhost:3000');

    cy.get('[data-testid="square0"]').click();

    cy.get('[data-testid="square3"]').click();

    cy.get('[data-testid="square1"]').click();

    cy.get('[data-testid="square4"]').click();

    cy.get('[data-testid="square2"]').click();

    cy.contains(expectedWinnerStatus);
  })
})
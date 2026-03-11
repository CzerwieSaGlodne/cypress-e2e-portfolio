/// <reference types="cypress"/>

describe('Homepage loading', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('should display the header', () => {
    cy.get('#header').should('be.visible');
  });
});

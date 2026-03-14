/// <reference types="cypress"/>

//Open the signup page and fill in the name and email fields.
// Verify that the input values were typed correctly.

describe('Form input test', () => {
  beforeEach(() => {
    cy.visit('/login');
  });
  it('should type name and email into the signup form and verify the entered values', () => {
    const name = 'test0101';
    const email = 'test0101@test.pl';
    cy.get('input[placeholder="Name"]').as('nameInput');
    cy.get('@nameInput').type(name).should('have.value', name);
    cy.get('input[data-qa="signup-email"]').as('emailInput');
    cy.get('@emailInput').type(email).should('have.value', email);
  });
});

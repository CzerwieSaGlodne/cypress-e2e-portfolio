/// <reference types="cypress"/>

//Find and select a checkbox on the signup form.
// Verify that the checkbox is checked.

describe('Checkbox test', () => {
  beforeEach(() => {
    cy.visit('/login');
  });
  it('should select a checkbox on the signup form and verify that it is checked', () => {
    const name = 'test0101';
    const email = `test${Date.now()}@test.pl`;
    cy.get('input[placeholder="Name"]').type(name);
    cy.get('input[data-qa="signup-email"]').type(email, { delay: 100 });
    cy.get('button[data-qa="signup-button"]').click();

    cy.get('#newsletter').check().should('be.checked');
  });
});

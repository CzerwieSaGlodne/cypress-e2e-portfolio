/// <reference types="cypress"/>

// Open the signup form and select a day, month, and year from dropdown lists.
// Verify that the selected values are correct.

describe('Signup form - date of birth dropdowns', () => {
  before(() => {
    cy.visit('/login');
  });
  it('should allow selecting day, month, and year and display the correct selected values', () => {
    cy.get('input[placeholder="Name"]').type('user');
    cy.get('input[data-qa="signup-email"]').type('user.test01@test.pl');
    cy.get('button[data-qa="signup-button"]').click();

    cy.get('#days').as('day');
    cy.get('@day').select('6').should('have.value', '6');
    cy.get('#months').as('month');
    cy.get('@month').select('4').should('have.value', '4');
    cy.get('#years').as('year');
    cy.get('@year').select('1996').should('have.value', 1996);
  });
});

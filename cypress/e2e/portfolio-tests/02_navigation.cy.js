/// <reference types="cypress"/>

describe('Navigation test', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('should navigate to the Products page via the menu', () => {
    cy.get('a[href="/products"]').click();
    cy.url().should('include', '/products');
  });
});

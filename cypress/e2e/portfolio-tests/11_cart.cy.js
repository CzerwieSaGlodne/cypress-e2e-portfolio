/// <reference types = "cypress" />
describe('Cart functionality', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('should display at least one product in the cart', () => {
    cy.get('a[data-product-id="1"]').first().click();
    cy.contains('Continue Shopping').click();
    cy.contains('a[href="/view_cart"]', 'Cart').click();
    cy.get('tbody tr').should('have.length.greaterThan', 0);
  });
});

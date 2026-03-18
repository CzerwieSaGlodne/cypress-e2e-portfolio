/// <reference types="cypress"/>

describe('Simple user flow', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('should allow user to add product to cart and see it in the cart', () => {
    cy.get('a[href = "/products"]').click();
    cy.get('.choose').first().click();
    cy.contains('.btn', 'Add to cart').click();
    cy.contains('.btn', 'Continue Shopping').click();
    cy.get('a[href="/view_cart"]').first().click();
    cy.get('#product-1').should('be.visible');
  });
});

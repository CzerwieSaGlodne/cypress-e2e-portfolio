/// <reference types="cypress"/>

// Open the Products page and click on the first product.
// Verify that the product details page is displayed.

describe('Product details page navigation', () => {
  beforeEach(() => {
    cy.visit('/products');
  });
  it('should display the product details page after clicking the first product', () => {
    cy.get('.choose').first().click();
    cy.get('.product-details').should('be.visible');
  });
});

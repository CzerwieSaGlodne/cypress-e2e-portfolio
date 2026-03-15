/// <reference types = "cypress"/>

describe('Product card hover functionality', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('should display the "Add to cart" button when hovering over a product card', () => {
    cy.get('.product-image-wrapper').first().trigger('mouseover');
    cy.get('a[data-product-id="1"]')
      .eq(1) // there are two matching elements in the DOM; the second one belongs to the hover overlay
      .should('contain', 'Add to cart')
      .and('exist');
  });
});

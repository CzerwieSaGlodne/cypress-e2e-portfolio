/// <reference types = "cypress"/>

describe('Add to cart functionality', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('should add a product to the cart and display the confirmation modal', () => {
    cy.get('a[data-product-id="1"]')
      .eq(1) // there are two matching elements in the DOM; the second one belongs to the hover overlay
      .click({ force: true });
    cy.get('.modal-body').should(
      'contain',
      'Your product has been added to cart.',
    );
  });
});

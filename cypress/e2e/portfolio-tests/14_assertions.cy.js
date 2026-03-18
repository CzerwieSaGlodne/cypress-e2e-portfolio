/// <reference types="cypress"/>

describe('Multiple assertions', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('should verify homepage elements', () => {
    cy.get('.logo img').should('exist').and('be.visible');
    cy.get('.shop-menu').should('be.visible');
    cy.get('.features_items .product-image-wrapper').should(
      'have.length.greaterThan',
      0,
    );
  });
});

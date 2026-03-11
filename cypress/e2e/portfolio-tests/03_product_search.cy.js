/// <reference types="cypress"/>

// Go to the Products page and search for a product using the search bar.
// Verify that search results are displayed.

describe('Product search functionality', () => {
  beforeEach(() => {
    cy.visit('/products');
  });
  it('should display search results after searching for a product on the Products page', () => {
    cy.get('#search_product').type('top');
    cy.get('#submit_search').click();
    cy.contains('h2', 'Searched Products').should('be.visible');
    cy.get('.productinfo').should('exist');
  });
});

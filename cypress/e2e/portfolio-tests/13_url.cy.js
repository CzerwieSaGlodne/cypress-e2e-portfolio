/// <reference types = "cypress" />

describe('URL validation', () => {
  beforeEach(() => {
    cy.visit('/contact_us');
  });
  it('should have correct URL on Contact page', () => {
    cy.url().should('include', '/contact_us');
  });
});

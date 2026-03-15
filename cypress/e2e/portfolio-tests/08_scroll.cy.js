/// <reference types ="cypress"/>

// Scroll to the bottom of the homepage and verify that the subscription section is visible.

describe('Scroll test', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('should scroll to the bottom of the homepage and display the subscription section', () => {
    cy.scrollTo('bottom');
    cy.contains('h2', 'Subscription').should('be.visible');
  });
});

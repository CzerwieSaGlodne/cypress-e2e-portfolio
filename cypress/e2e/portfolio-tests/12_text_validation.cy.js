/// <reference types = "cypress" />

describe('Homepage text validation', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('should display Automation Exercise text on the homepage', () => {
    cy.contains('AutomationExercise').should('be.visible');
  });
});

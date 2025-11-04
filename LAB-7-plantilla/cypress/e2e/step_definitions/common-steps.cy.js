import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

// ===== STEPS COMPARTIDOS POR TODOS LOS FEATURES =====

Given('que el usuario accede al sitio web de Buggy Cars', () => {
  cy.visit('https://buggy.justtestit.org/');
  cy.url().should('include', 'buggy.justtestit.org');
});

Then('debería volver a la página principal', () => {
  cy.url().should('eq', 'https://buggy.justtestit.org/');
});

Then('debería ver los campos de login', () => {
  cy.get('.input-sm').should('be.visible');
  cy.get('.form-inline > .form-group > [name="password"]').should('be.visible');
  cy.get('.btn-success').should('be.visible');
});

Then('no debería estar autenticado', () => {
  cy.get('body').then(($body) => {
    if ($body.find(':nth-child(1) > .nav-link').length > 0) {
      cy.get(':nth-child(1) > .nav-link').should('not.contain', 'Hi');
    }
  });
});
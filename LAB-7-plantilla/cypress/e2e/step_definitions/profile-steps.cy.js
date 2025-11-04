import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('el usuario inicia sesión con credenciales válidas', () => {
  cy.get('.input-sm').clear().type('Claudia12');
  cy.get('.form-inline > .form-group > [name="password"]').clear().type('Test1234!');
  cy.get('.btn-success').click();
  cy.wait(1000);
  
  cy.get(':nth-child(1) > .nav-link').should('be.visible').and('contain', 'Hi');
});

When('el usuario hace clic en el logo de Buggy Cars', () => {
  cy.get('.navbar-brand').click();
  cy.wait(500);
});

Then('debería ver la lista de autos', () => {
  cy.url().should('eq', 'https://buggy.justtestit.org/');
  cy.get('body').should('be.visible');
});

Then('debería seguir autenticado', () => {
  cy.get(':nth-child(1) > .nav-link')
    .should('be.visible')
    .and('contain', 'Hi');
});

When('el usuario hace clic en Profile', () => {
  cy.get(':nth-child(2) > .nav-link').click();
  cy.wait(1000);
});

Then('debería ver su información de perfil', () => {
  cy.url().should('include', 'profile');
  cy.get('body').should('be.visible');
});

When('el usuario hace clic en Logout', () => {
  cy.get(':nth-child(3) > .nav-link').click();
  cy.wait(1000);
});
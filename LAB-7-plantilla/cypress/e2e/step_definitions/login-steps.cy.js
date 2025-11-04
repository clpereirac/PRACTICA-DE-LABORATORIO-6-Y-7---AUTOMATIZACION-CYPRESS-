import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When('el usuario ingresa credenciales válidas:', (dataTable) => {
  const credentials = dataTable.rowsHash();
  
  cy.get('.input-sm').clear().type(credentials.username);
  cy.get('.form-inline > .form-group > [name="password"]').clear().type(credentials.password);
});

When('hace clic en el botón Login', () => {
  cy.get('.btn-success').click();
  cy.wait(1000);
});

Then('debería ver su nombre de usuario en el navbar', () => {
  cy.get(':nth-child(1) > .nav-link')
    .should('be.visible')
    .and('contain.text', 'Hi');
});

Then('debería ver las opciones Profile y Logout', () => {
  cy.get(':nth-child(2) > .nav-link')
    .should('be.visible')
    .and('contain', 'Profile');
  
  cy.get(':nth-child(3) > .nav-link')
    .should('be.visible')
    .and('contain', 'Logout');
});

When('el usuario ingresa credenciales inválidas:', (dataTable) => {
  const credentials = dataTable.rowsHash();
  
  cy.get('.input-sm').clear().type(credentials.username);
  cy.get('.form-inline > .form-group > [name="password"]').clear().type(credentials.password);
});

Then('debería ver un mensaje de error de login', () => {
  cy.url().should('include', 'buggy.justtestit.org');
});

When('el usuario deja los campos de login vacíos', () => {
  cy.get('.input-sm').clear();
  cy.get('.form-inline > .form-group > [name="password"]').clear();
});

Then('no debería poder iniciar sesión', () => {
  cy.url().should('eq', 'https://buggy.justtestit.org/');
  cy.get('.input-sm').should('be.visible');
});
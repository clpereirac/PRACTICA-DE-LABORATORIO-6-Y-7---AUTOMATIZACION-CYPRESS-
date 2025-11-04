import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

// Variables para almacenar datos temporales
let generatedUsername;

When('el usuario hace clic en el botón Register', () => {
  cy.get('.btn-success-outline').should('be.visible').click();
  cy.wait(500);
});

When('completa el formulario de registro con:', (dataTable) => {
  const data = dataTable.rowsHash();
  
  // Generar username único si contiene {timestamp}
  if (data.username && data.username.includes('{timestamp}')) {
    generatedUsername = data.username.replace('{timestamp}', Date.now());
    cy.get('#username').clear().type(generatedUsername);
  } else {
    cy.get('#username').clear().type(data.username);
  }
  
  cy.get('#firstName').clear().type(data.firstName);
  cy.get('#lastName').clear().type(data.lastName);
  cy.get('#password').clear().type(data.password);
  cy.get('#confirmPassword').clear().type(data.confirmPassword);
});

When('hace clic en el botón Register del formulario', () => {
  cy.get('.btn-default').click();
  cy.wait(1000);
});

Then('debería ver el mensaje {string}', (expectedMessage) => {
  cy.get('.result')
    .should('be.visible')
    .and('contain', expectedMessage);
});

Then('debería ver el mensaje de error {string}', (expectedError) => {
  cy.get('.result')
    .should('be.visible')
    .and('contain', expectedError);
});

When('hace clic en el botón Cancel', () => {
  cy.get('.col-md-6 > form > a.btn').click();
  cy.wait(500);
});
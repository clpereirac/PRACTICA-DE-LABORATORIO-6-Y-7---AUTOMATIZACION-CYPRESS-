describe('Testing Yes Online Shop - Automatización Completa', () => {
  
  // Variable global para almacenar el email generado
  let userEmail;
  const userPassword = 'TestPassword123!';

  // CONFIGURACIÓN ANTES DE TODOS LOS TESTS
  before(() => {
    // Generar email único para esta ejecución
    const timestamp = Date.now();
    const randomNum = Math.floor(Math.random() * 10000);
    userEmail = `testuser${timestamp}${randomNum}@testmail.com`;
    cy.log('Email generado para esta ejecución: ' + userEmail);
  });
});

// Test para validar el título de la página

it('Debe validar el título de la página', () => {
  // Visitar la página
  cy.visit('http://www.testingyes.com/onlineshop/');

  // Esperar un elemento visible que indique que la página cargó completamente
  cy.get('body', { timeout: 10000 }).should('be.visible');

  // Validar el título real de la página
  cy.title({ timeout: 10000 }).should('include', 'My e-commerce');

  cy.log('✓ Título de la página validado');
});

it('Debe validar la presencia del logo', () => {
      // Validar logo en el header
    //   cy.get('#_desktop_logo', { timeout: 10000 })
    //     .should('be.visible')
    //     .and('exist');
      cy.visit('http://www.testingyes.com/onlineshop/');
          cy.get('img[alt="My e-commerce"]').should('be.visible');
      cy.log('✓ Logo del sitio validado');
    });


 it('Debe validar el menú de navegación principal', () => {
     cy.visit('http://www.testingyes.com/onlineshop/');
      // Validar que el menú existe y es visible
      cy.get('#top-menu', { timeout: 10000 })
        .should('be.visible')
        .and('exist');
      

          cy.get('#top-menu a').contains('Clothes').should('be.visible');
 cy.get('#top-menu a').contains('Accessories').should('be.visible');
  cy.get('#top-menu a').contains('Art').should('be.visible');
      //});
      cy.log('✓ Menú de navegación validado');
    });


    it('Debe mostrar el campo de búsqueda', () => {
  cy.visit('http://www.testingyes.com/onlineshop/');

  // Validar que el input de búsqueda sea visible
  cy.get('input[name="s"]').should('be.visible');

  cy.log('✓ Campo de búsqueda validado');
});


it('Debe validar que el ícono de carrito es visible', () => {
    cy.visit('http://www.testingyes.com/onlineshop/');
    cy.get('i.material-icons.shopping-cart')
      .should('be.visible')
      .and('contain.text', 'shopping_cart');
  });

  it('Debe validar el pie de página de PrestaShop', () => {
  cy.visit('http://www.testingyes.com/onlineshop/');
  cy.contains('a', 'Ecommerce software by PrestaShop').should('be.visible');
});


describe('flujo register + login Buggy', () => {

  const testUser = {
    username: 'testuser' + Date.now(), // único cada corrida
    firstName: 'Juan',
    lastName: 'Perez',
    password: 'Test1234!'               // Buggy exige mínimo 8 chars con !
  }

  it('registrar y luego logear', () => {
    cy.visit('/')

    cy.contains('Register').click()

    // completar registro
    cy.get('input[name="username"]').type(testUser.username)
    cy.get('input[name="firstName"]').type(testUser.firstName)
    cy.get('input[name="lastName"]').type(testUser.lastName)
    cy.get('input[name="password"]').type(testUser.password)
    cy.get('input[name="confirmPassword"]').type(testUser.password)

    cy.get('button[type="submit"]').click()

    // esperamos mensaje confirmación
    cy.contains('Registration is successful').should('be.visible')

    // imprimo para que lo copies si querés
    cy.log('USERNAME usado: ' + testUser.username)

    // ahora login
    cy.visit('/')

    cy.get('input[name="login"]').type(testUser.username)
    cy.get('input[name="password"]').type(testUser.password)
    cy.get('button.btn-success').click()

    // verificar login correcto
    cy.contains(testUser.firstName).should('be.visible')
  })
})

describe('exploración sitio Buggy', () => {
  beforeEach(() => {
    // como ya tienes baseUrl
    cy.visit('/')
  })

  it('home carga', () => {
    cy.get('h1').should('exist') // título de homepage existe
  })

  it('ir a Register', () => {
    cy.contains('Register').click()

    // ahora ya estamos en la página de registro
    cy.get('form').should('exist')
  })
})
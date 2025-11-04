# language: es
Característica: Login de usuario en Buggy Cars
  Como usuario registrado
  Quiero iniciar sesión en el sitio
  Para acceder a mi perfil y funcionalidades

  Antecedentes:
    Dado que el usuario accede al sitio web de Buggy Cars

  @login @exitoso
  Escenario: Login exitoso con credenciales válidas
    Cuando el usuario ingresa credenciales válidas:
      | campo    | valor     |
      | username | Claudia12 |
      | password | Test1234! |
    Y hace clic en el botón Login
    Entonces debería ver su nombre de usuario en el navbar
    Y debería ver las opciones Profile y Logout

  @login @fallido
  Escenario: Login fallido con credenciales inválidas
    Cuando el usuario ingresa credenciales inválidas:
      | campo    | valor           |
      | username | usuarioInvalido |
      | password | passwordIncorrecto |
    Y hace clic en el botón Login
    Entonces debería ver un mensaje de error de login
    Y no debería estar autenticado

  @login @campos-vacios
  Escenario: Intento de login con campos vacíos
    Cuando el usuario deja los campos de login vacíos
    Y hace clic en el botón Login
    Entonces no debería poder iniciar sesión
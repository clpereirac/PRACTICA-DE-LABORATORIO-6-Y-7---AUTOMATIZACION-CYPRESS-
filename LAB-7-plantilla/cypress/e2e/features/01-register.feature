# language: es
Característica: Registro de usuario en Buggy Cars
  Como usuario nuevo
  Quiero registrarme en el sitio Buggy Cars
  Para poder acceder a las funcionalidades del sistema

  Antecedentes:
    Dado que el usuario accede al sitio web de Buggy Cars

  @registro @exitoso
  Escenario: Registro exitoso de un nuevo usuario
    Cuando el usuario hace clic en el botón Register
    Y completa el formulario de registro con:
      | campo            | valor              |
      | username         | TestUser{timestamp}|
      | firstName        | Juan               |
      | lastName         | Perez              |
      | password         | Test1234!          |
      | confirmPassword  | Test1234!          |
    Y hace clic en el botón Register del formulario
    Entonces debería ver el mensaje "Registration is successful"

  @registro @error
  Escenario: Intento de registro con usuario existente
    Cuando el usuario hace clic en el botón Register
    Y completa el formulario de registro con:
      | campo            | valor         |
      | username         | Claudia12     |
      | firstName        | Claudia       |
      | lastName         | Pereira       |
      | password         | Test1234!     |
      | confirmPassword  | Test1234!     |
    Y hace clic en el botón Register del formulario
    Entonces debería ver el mensaje de error "UsernameExistsException: User already exists"

  @registro @cancelar
  Escenario: Cancelar el proceso de registro
    Cuando el usuario hace clic en el botón Register
    Y hace clic en el botón Cancel
    Entonces debería volver a la página principal
    Y debería ver los campos de login
# language: es
Característica: Navegación y perfil de usuario
  Como usuario autenticado
  Quiero navegar por el sitio y acceder a mi perfil
  Para gestionar mi información y cerrar sesión

  Antecedentes:
    Dado que el usuario accede al sitio web de Buggy Cars
    Y el usuario inicia sesión con credenciales válidas

  @navegacion @home
  Escenario: Volver a la página principal desde el navbar
    Cuando el usuario hace clic en el logo de Buggy Cars
    Entonces debería ver la lista de autos
    Y debería seguir autenticado

  @perfil @acceso
  Escenario: Acceder al perfil de usuario
    Cuando el usuario hace clic en Profile
    Entonces debería ver su información de perfil

  @logout @exitoso
  Escenario: Cerrar sesión exitosamente
    Cuando el usuario hace clic en Logout
    Entonces debería volver a la página principal
    Y debería ver los campos de login
    Y no debería estar autenticado
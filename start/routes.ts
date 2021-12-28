import Route from '@ioc:Adonis/Core/Route'

// auth
Route.get('/auth/login', 'AuthController.loginPage')
Route.post('/auth/login', 'AuthController.login')
Route.post('/auth/logout', 'AuthController.logout')

// dashboard
Route.get('/dashboard', 'DashboardController.index').middleware('auth')

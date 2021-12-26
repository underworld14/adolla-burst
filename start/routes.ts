import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async ({ view }) => {
  return view.render('welcome')
})

Route.get('/test', async ({ inertia }) => {
  return inertia.render('Test')
})

Route.get('/page1', async ({ inertia }) => {
  return inertia.render('Page1')
})

Route.get('/auth/login', async ({ inertia }) => {
  return inertia.render('Auth/Login')
})

Route.get('/dashboard', async ({ inertia }) => {
  return inertia.render('Dashboard/Transaction')
})

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3003
const middleware = require('./middleware')
const loginRoute = require('./routes/loginRoutes')
const registerRoute = require('./routes/registerRoutes')

const path = require('path')

const server = app.listen(port, () => console.log(`listening on port${port}`))

app.set('view engine', 'pug')
app.set('views', 'views')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

//Routes
app.use('/login', loginRoute)
app.use('/register', registerRoute)

app.get('/', middleware.requireLogin, (req, res, next) => {
  var payload = {
    pageTitle: 'Home',
  }

  res.status(200).render('home', payload)
})

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const router = express.Router()

app.set('view engine', 'pug')
app.set('views', 'views')

app.use(bodyParser.urlencoded({ extended: false }))

router.get('/', (req, res, next) => {
  res.status(200).render('register')
})

router.post('/', (req, res, next) => {
  console.log(req.body)
  res.status(200).render('register')
})

module.exports = router

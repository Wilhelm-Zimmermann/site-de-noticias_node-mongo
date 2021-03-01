const express = require('express'),
      consign = require('consign'),
      bodyParser = require('body-parser'),
      session = require('express-session'),
      path = require('path'),
      validator = require('express-validator')

const app = express()

app.set('view engine','ejs')
app.set('views','./app/views')

app.use(express.static(path.join(__dirname, 'app/public')))
app.use(bodyParser.urlencoded( { extended : true }))
app.use(session({
	secret : 'randomword',
	resave : false,
	saveUninitialized : false
}))
app.use(validator())

consign()
	.include('./app/routes')
	.then('./app/controllers')
	.then('./app/models')
	.then('./database')
	.into(app)

module.exports = app
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/noticias', { useNewUrlParser : true , useUnifiedTopology : true })
mongoose.set('useCreateIndex',true)
mongoose.Promise = global.Promise

const db = mongoose.connection

module.exports = () => {
	return db

}
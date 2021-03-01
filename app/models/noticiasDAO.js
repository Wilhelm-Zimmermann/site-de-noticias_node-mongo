const objId = require('mongodb').ObjectId

class Noticias{
	constructor(connection) {
		this._connection = connection
	}
}

Noticias.prototype.getNoticias = function(news/* callback */){
	this._connection.collection('news').find().sort({'date' : -1}).toArray(news)
} 

Noticias.prototype.postNoticia = function(dados,cb) {

	const news = dados
	const { autor, titulo, resumo , categories} = news

	this._connection.collection('news').insertOne({
		autor,
		titulo,
		resumo,
		categoria : categories,
		
		date : new Date()
	})
}

Noticias.prototype.getOneNoticia = function(id,cb) {

	this._connection.collection('news').findOne({_id : objId(id)},cb)
}

module.exports = () => {
	return Noticias
}
const db = require('../../database/mongo')()
const objectId = require('mongodb').ObjectId

exports.getNoticias = (cb) => {
	db.collection('news').find().toArray(cb)
}

exports.deleteNews = (id) => {
	db.collection('news').deleteOne({
		_id : objectId(id)
	})
}

exports.getUsers = (cb) => {
	db.collection('usuarios').find().toArray(cb)
}

exports.deleteUser = (id) => {
	db.collection('usuarios').deleteOne({
		_id : objectId(id)
	})
}
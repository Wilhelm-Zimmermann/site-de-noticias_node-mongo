const db = require('../../database/mongo')()

module.exports.getCategorias = (cb) => {
	db.collection('categorias').find().toArray(cb)
}

module.exports.postCategoria = async (res,categoria) => {

	const category = await db.collection('categorias').findOne({categoria : categoria})

	if(category){
		 return res.redirect('/formulario_de_inclusao_noticias?msg=error')
	}
	db.collection('categorias').insertOne({categoria : categoria})
}
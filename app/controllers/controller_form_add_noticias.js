const categorias = require('../models/categoriasDAO')

module.exports.view = (app,req,res) => {

	if(!req.session.login){
		res.redirect('/user/login')
		return
	}
	categorias.getCategorias((err,result) => {
		res.render('post/form_add_noticias', { categorias : result , dados : {} , errors : {}})
	})
}

module.exports.addNoticia = (app,req,res) => {

	if(!req.session.login)
		return res.redirect('/user/login')
	const dados = req.body

	req.assert('autor','Autor nao pode ser vazio').notEmpty()
	req.assert('titulo','Titulo nao pode ser vazio').notEmpty()
	req.assert('resumo','Resumo nao pode ser vazio').notEmpty()
	req.assert('categories','Selecione uma categoria').notEmpty()

	var errors = req.validationErrors()

	if(errors){
		categorias.getCategorias((err,result) => {
			res.render('post/form_add_noticias', { categorias : result , dados : dados , errors : errors})
	})
		return 
	}

	const connection = app.database.mongo
	const noticiasDAO = new app.app.models.noticiasDAO(connection)

	noticiasDAO.postNoticia(dados)

	res.redirect('/')
}

module.exports.addCategory = async (app,req,res) => {
	const dados = req.body

	console.log(dados)

	const { categoria } = dados

	const categoryDAO = require('../models/categoriasDAO')

	await categoryDAO.postCategoria(res,categoria)

	res.redirect('/formulario_de_inclusao_noticias')

}
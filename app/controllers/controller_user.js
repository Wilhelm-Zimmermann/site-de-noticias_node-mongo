const usuariosDAO = require('../models/usuariosDAO')

module.exports.renderLogin = (app,req,res) => {

	var msg = ''
	if(req.query.msg != '')
		msg = req.query.msg

	res.render('user/login', { msg : msg,errors: {}})
}

module.exports.signIn = (app,req,res) => {
	
	const user = req.body

	req.assert('usuario','Usuario nao pode ser vazio').notEmpty()
	req.assert('senha','Senha nao pode ser vazio').notEmpty()

	var errors = req.validationErrors()

	if(errors){
		return res.render('user/login',{ errors : errors ,msg: {}})
	}
	usuariosDAO.login(res,req,user)

}

module.exports.renderSignUp = (app,req,res) => {

	var msg = ''
	if(req.query.msg != ''){
		msg = req.query.msg
	}

	res.render('user/cadastro',{msg : msg , errors : {} , dados : {}})
}

module.exports.signUp = (app,req,res) => {
	const user = req.body

	req.assert('usuario','Usuario nao pode ser vazio').notEmpty()
	req.assert('senha','Senha nao pode ser vazio').notEmpty()

	var errors = req.validationErrors()

	if(errors){
		return res.render('user/cadastro',{ errors : errors , dados : user , msg: {}})
	}

	var msg = ''
	if(req.query.msg != ''){
		msg = req.query.msg
	}

	usuariosDAO.postUser(user,req,res,msg)
}
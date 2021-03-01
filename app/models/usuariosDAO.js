const db = require('../../database/mongo')()
const bcrypt = require('bcrypt')

exports.postUser = async (user,req,res,msg) => {

	var { usuario , senha } = user
	var hash = await bcrypt.hash(senha,10)

	senha = hash

	const name = await db.collection('usuarios').findOne({usuario : usuario})


	if(name){
		return res.redirect('/user/cadastro?msg=userError')
	}

	const signUp = db.collection('usuarios').insertOne({
		usuario : usuario,
		senha : senha
	})

	req.session.login = signUp

	res.redirect('/')
}

exports.login = async (res,req,user) => {

	const { usuario , senha } = user

	const userLog = await db.collection('usuarios').findOne({usuario : usuario})

	if(usuario == 'admin' && senha == 'infinity'){
		req.session.admin = usuario
		return res.redirect('/admin')
	}
		
	if(!userLog){
		return res.redirect('/user/login?msg=errorLogin')
	}
	db.collection('usuarios').findOne({
		usuario : usuario,
		senha : bcrypt.compare(senha,userLog.senha,(err,result) => {
			if(!result) return res.redirect('/user/login')

			req.session.login = userLog
			res.redirect('/')
		})
	})

	
}
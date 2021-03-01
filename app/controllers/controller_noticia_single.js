module.exports.loadOne = (app,req,res) => {

	if(!req.session.login){
		res.redirect('/user/login')
	}

	const id = req.query.id

	const connection = app.database.mongo
	const noticiasDAO = new app.app.models.noticiasDAO(connection)

	noticiasDAO.getOneNoticia(id,(err,result) => {		
		res.render('news/noticia_single',{ noticia : result})
	})
}
module.exports.loadNoticias = async (app,req,res) => {

	const connection = app.database.mongo
	const noticiasDAO = new app.app.models.noticiasDAO(connection)

	noticiasDAO.getNoticias((err,result) => {
		res.render('home/noticias', {news : result})
	})	


}

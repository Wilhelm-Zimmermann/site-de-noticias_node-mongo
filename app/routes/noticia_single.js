module.exports = app => {
	app.get('/noticia',(req,res) => {
		app.app.controllers.controller_noticia_single.loadOne(app,req,res)
	})
}
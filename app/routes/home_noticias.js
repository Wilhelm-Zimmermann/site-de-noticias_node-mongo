module.exports = app => {
	app.get('/',(req,res) => {
		app.app.controllers.controller_home_noticias.loadNoticias(app,req,res)
	})
}
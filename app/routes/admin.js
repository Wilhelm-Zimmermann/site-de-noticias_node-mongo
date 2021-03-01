module.exports = app => {
	app.get('/admin',(req,res) => {
		app.app.controllers.controller_admin.renderAdmin(app,req,res)
	})

	app.get('/admin/noticias',(req,res) => {
		app.app.controllers.controller_admin.renderAdminNoticias(app,req,res)
	})

	app.get('/admin/users',(req,res) => {
		app.app.controllers.controller_admin.renderAdminUsers(app,req,res)
	})

	app.get('/noticia/delete',(req,res) => {
		app.app.controllers.controller_admin.deleteNews(app,req,res)
	})
	app.get('/admin/users/delete',(req,res) => {
		app.app.controllers.controller_admin.deleteUser(app,req,res)
	})
}
module.exports = app => {
	app.get('/formulario_de_inclusao_noticias',(req,res) => {
		app.app.controllers.controller_form_add_noticias.view(app,req,res)
	})
	
	app.post('/formulario_de_inclusao_noticias',(req,res) => {
		app.app.controllers.controller_form_add_noticias.addNoticia(app,req,res)
	})

	app.post('/category_add',(req,res) => {
		app.app.controllers.controller_form_add_noticias.addCategory(app,req,res)
	})
}



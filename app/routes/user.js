module.exports = app => {
	app.get('/user/login',(req,res) => {
		app.app.controllers.controller_user.renderLogin(app,req,res)
	})

	app.post('/user/login',(req,res) => {
		app.app.controllers.controller_user.signIn(app,req,res)
	})

	app.get('/user/cadastro',(req,res) => {
		app.app.controllers.controller_user.renderSignUp(app,req,res)
	})
	
	app.post('/user/cadastro',(req,res) => {
		app.app.controllers.controller_user.signUp(app,req,res)
	})
}
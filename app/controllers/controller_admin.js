const admDAO = require('../models/ADM')

module.exports.renderAdmin = (app,req,res) => {

	if(!req.session.admin){
		res.redirect('loalhost:80/user/login')
		process.exit(0)
	}
	res.render('admin/admin')
}

module.exports.renderAdminNoticias = (app,req,res) => {
	if(!req.session.admin){
		res.redirect('loalhost:80/user/login')
		process.exit(0)
	}
	admDAO.getNoticias((err,result) => {
		res.render('admin/admin_noticias', {news : result})
	})
}

module.exports.deleteNews = async (app,req,res) => {
	if(!req.session.admin){
		res.redirect('loalhost:80/user/login')
		process.exit(0)
	}
	const id = req.query.id

	await admDAO.deleteNews(id)

	res.redirect('/admin/noticias')
}

module.exports.renderAdminUsers = (app,req,res) => {
	if(!req.session.admin){
		res.redirect('loalhost:80/user/login')
		process.exit(0)
	}

	admDAO.getUsers((err,result) => {
		res.render('admin/admin_user', { users : result })
	})
}

module.exports.deleteUser = async (app,req,res) => {
	if(!req.session.admin){
		res.redirect('loalhost:80/user/login')
		process.exit(0)
	}

	const id = req.query.id

	await admDAO.deleteUser(id)

	res.redirect('/admin/users')
}
var express = require('express');
var userModel = require.main.require('./models/user-model');
var router = express.Router();

//GET METHOD
router.get('/',function(req,res){
	res.render('login/index');
});
//POST METHOD
router.post('/',function(req,res){
	//Creating user object from view [id]
	var user = {
		username: req.body.username,
		password: req.body.password
	};
	userModel.validate(user,function(status){
		if(status)
		{
			//req.session.username = req.body.username;
			res.cookie('username',req.body.username);
			res.redirect('/home');
		}
		else{
			res.redirect('/login');
		}
	});
});




module.exports = router;//[Note = returns response through router object ]
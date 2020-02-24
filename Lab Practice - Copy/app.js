//Declaration or requiring libraries
var express = require('express');
var login = require('./controllers/login');//login controller required from folder

var home = require('./controllers/home');//home
//logout
var ejs = require('ejs');
var expressSession = require('express-session');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var app = express();


//Configuration 

app.set('view engine' , 'ejs');//[Note : set EJS as the view engine for our Express application]


//Middleware : Handles requests and routes
app.use(bodyParser.urlencoded({extended:true}));//[Note : URL encoding  allow to convert a (nested) object to string]
app.use(expressSession({secret: 'my top sectet value',saveUninitialized : true,resave : false}));//[Note : setting session rules to save if not initialized and do not resave on every instance]
app.use(cookieParser());



app.use('/login',login);
app.use('/home',home);


//Routes [Requests for '/' is handeled here]
app.get('/',function(req,res){
			res.send("Welcome to my application");
});


//Server start
app.listen(3000,function(){
	console.log('Node server stated at port : 3000');
});

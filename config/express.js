var express = require('express');
var load = require('express-load');
//var home = require('../app/routes/home');
var bodyParser = require('body-parser');


module.exports = function () {
	var app = express();
	//setando variaveis de ambiente
	app.set('port',3009);
	//middleware
	app.use(express.static('./public')); 
	//usando ejs para view engine
	app.set('view engine','ejs');
	app.set('views','./app/views');
	//usando middleware para tirar o problema de requisição REST como o delete
	app.use(bodyParser.urlencoded({extended:true}));
	app.use(bodyParser.json());
	app.use(require('method-override')());
	//chamando rotas
	//home(app);
	load('models', {cwd:'app'}).then('controllers').then('routes').into(app);

	return app;
}

module.exports = function(app){
	var controller = app.controllers.contato;
	/*app.get('/contatos', controller.listaContatos);
	app.get('/contatos/:id', controller.obterContato);
	app.delete('/contatos/:id', controller.removeContato);*/
	app.route('/contatos')
		.get(controller.listaContatos)
		.post(controller.salvaContato);

	app.route('/contatos/:id')
		.get(controller.obterContato)
		.delete(controller.removeContato);
};
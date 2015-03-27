
module.exports = function(app){
	var controller = {};

	var ID_CONTATO_INC = 3;

	var contatos = [
		 {_id:1, nome:'Madona Rainha', email:'contato@exemplo.com', gender:1}
		,{_id:2, nome:'Jhonantan Reigan', email:'contato@jhonantan.com', gender:1}
		,{_id:3, nome:'Contato Gilberto', email:'contato@gilberto.com', gender:1}
		,{_id:4, nome:'Carlos catado', email:'carlos@gilberto.com', gender:1}
		,{_id:5, nome:'Gilbert Grace', email:'gilbert@gilberto.com', gender:1}
	];

	controller.listaContatos = function (req, res) {
		res.json(contatos);
	};

	controller.obterContato = function(req, res) {
		var id = req.params.id;
		var contato = contatos.filter(function(contato){
			return contato._id == id;
		})[0];
		contato ? res.json(contato) : res.status(404).send('Contato não encontrado');
	};

	controller.removeContato = function (req, res) {
		var id = req.params.id;
		contatos = contatos.filter(function(contato){
			return contato._id != id;
		});
		res.status(204).end();
		console.log('API: removeContato:', contatos);
	};

	controller.salvaContato = function (req, res) {
		var contato = req.body;
		contato = contato._id ? atualiza(contato) : adiciona(contato);
		res.json(contato);
	};

	function adiciona(contato){
		contato._id = ++ID_CONTATO_INC;
		contatos.push(contato);
		return contato;
	};

	function atualiza(contatoUpdate){
		contatos = contatos.map(function (contato) {
			if(contato._id == contatoUpdate._id){
				contato = contatoUpdate;
			}
			return contato;
		});

		return contatoUpdate;
	};

	return controller;
};


(function () {
	'use strict';

	angular
		.module('contatoform')
		.controller('ContatosController', ContatosController);
		

	ContatosController.$inject = ['$scope','$resource','Contato'];


	/* @ngInject */
	function ContatosController($scope, $resource, Contato) {

		/* jshint validthis: true */
		var vm = this;

		vm.total = 0;
		vm.contatos = [];
		vm.mensagem = {texto: ''};

		vm.init = init;
		vm.remove = remove;

		init();

		function init() {
			buscaContatos();
		}

		function buscaContatos() {
			Contato.query(
				function(contatos) {
					vm.contatos = contatos;
				},
				function(erro) {
					console.error('Não foi possivel carregar lista:', erro);
					$scope.mensagem = {
						texto: 'Não foi possível obter a lista'
					};
				}
			);
		}

		function remove(contato) {
			Contato.delete({id: contato._id}
				,buscaContatos
				,function(erro) {
					console.error('Não foi possivel remover contato:', erro);
					$scope.mensagem = {
						texto: 'Não foi possivel remover contato'
					};
				}
			);
		}
	}
})();

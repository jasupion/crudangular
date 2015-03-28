

(function () {
	'use strict';

	angular
		.module('contatoform')
		.controller('ContatoController', Controller);

	Controller.$inject = ['$scope','$resource','$routeParams' ,'Contato'];


	/* @ngInject */
	function Controller($scope, $resource, $routeParams, Contato) {

		/* jshint validthis: true */
		var vm = this;

		vm.contato = new Contato();
		vm.mensagem = {texto: ''};

		vm.init = init;
		vm.salvar = salvar;

		init();

		function init() {
			if($routeParams.id){ getContato(); }
		}

		function getContato(){
			Contato.get({id:$routeParams.id},
				function(contato){
					vm.contato = contato;
				},
				function(erro){
					vm.mensagem = {texto: 'Não foi possivel obter o contato'};
					console.error(erro);
				}
			);
		};

		function salvar() {
			vm.contato.$save()
				.then(function () {
					vm.mensagem = {texto: 'Salvo com sucesso'};
					vm.contato = new Contato();
				})
				.catch(function (erro) {
					vm.mensagem = {texto: 'Não foi salvar o contato'};
					console.error(erro);
				});
		};


	}
})();

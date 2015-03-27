
(function () {
	'use strict';
	
	angular
		.module('contatoform', ['ngRoute','ngResource'])
		.config(routeConfig);

	routeConfig.$inject = ['$routeProvider'];

	function routeConfig($routeProvider) {
		$routeProvider
			.when('/contatos', {
				templateUrl: 'partials/contatos.html',
				controller: 'ContatosController',
				controllerAs:'vm'
			})
			.when('/contato/:id', {
				templateUrl: 'partials/contato.html',
				controller: 'ContatoController',
				controllerAs:'vm'
			})
			.when('/contato', {
				templateUrl: 'partials/contato.html',
				controller: 'ContatoController',
				controllerAs:'vm'
			})
			.otherwise({redirectTo: '/contatos'});
	}
})();
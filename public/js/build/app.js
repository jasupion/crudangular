(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

(function () {
	'use strict';
	//build
	//var angular = require('angular');
	//require('angular-route');
	//require('angular-resource');

	angular
		.module('contatoform', ['ngRoute','ngResource','ui.grid','ui.grid.edit'])
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
},{}]},{},[1])
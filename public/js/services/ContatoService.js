
(function () {
    'use strict';

    angular
        .module('contatoform')
        .factory('Contato', Contato);

    Contato.$inject = ['$resource'];

    /* @ngInject */
    function Contato($resource) {
        return $resource('/contatos/:id');
    }
})();

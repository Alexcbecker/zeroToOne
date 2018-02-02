(function() {
    'use strict';

    angular
        .module('zeroToOne')
        .factory('urlFactory', urlFactory);

    function urlFactory() {
        return {
            getUrl: function(crudChar) {
                switch(crudChar) {
                    case 'C':
                        return 'adicionar.html';
                    case 'R':
                        return 'consultar.html';
                    case 'U':
                        return 'alterar.html';
                    case 'D':
                        return 'excluir.html'
                    default:
                        return 'index.html';
                }
            },
            getAcao: function(crudChar) {
                switch(crudChar) {
                    case 'C':
                        return 'adicionar';
                    case 'R':
                        return 'consultar';
                    case 'U':
                        return 'alterar';
                    case 'D':
                        return 'excluir'
                    default:
                        return '';
                }
            }
        }
    }
})();
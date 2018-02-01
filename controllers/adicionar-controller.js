(function() {
    'use strict';

    angular
        .module('adicionarApp', [])
        .controller('AdicionarController', AdicionarController);

    function AdicionarController() {
        let vm = this;

        vm.nome = 'Ricardo teste ok2';

        let u = new Usuario();
        u.id = 1;
        u.nome = 'Vardo;'
        console.log(u.toString());
    }
})();
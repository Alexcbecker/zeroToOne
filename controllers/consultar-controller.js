(function() {
    'use strict';

    angular
        .module('consultarApp', ['zeroToOne'])
        .controller('ConsultarController', ConsultarController);

    ConsultarController.$inject = ['urlService', 'urlFactory'];

    function ConsultarController(urlService, urlFactory) {
        let vm = this;

        vm.id = urlService.getUrlParameter('id');
        vm.voltar = urlService.voltarPagPrincipal;

        start();

        function start() {
            if (isNaN(vm.id)) {
                window.alert('ID não informado!');
            } else {
                vm.usuario = selectUserById(vm.id);
            }
        }
    }
})();
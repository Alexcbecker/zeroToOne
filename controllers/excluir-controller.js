(function() {
    'use strict';

    angular
        .module('excluirApp', ['zeroToOne'])
        .controller('ExcluirController', ExcluirController);

    ExcluirController.$inject = ['urlService', 'urlFactory'];

    function ExcluirController(urlService, urlFactory) {
        let vm = this;

        vm.id = urlService.getUrlParameter('id');
        vm.excluirUsuario = excluirUsuario;
        vm.voltar = urlService.voltarPagPrincipal;

        start();

        function start() {
            if (isNaN(vm.id)) {
                window.alert('ID não informado!');
            } else {
                vm.usuario = selectUserById(vm.id);
            }
        }

        function excluirUsuario() {
            if (window.confirm('Confirma a exclusão?')) {
                if (!deleteUser(vm.usuario)) {
                    return false;
                }
                window.location = urlFactory.getUrl('main');
            }
        }
    }
})();
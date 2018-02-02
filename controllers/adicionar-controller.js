(function() {
    'use strict';

    angular
        .module('adicionarApp', ['zeroToOne'])
        .controller('AdicionarController', AdicionarController);

    AdicionarController.$inject = ['urlService', 'urlFactory'];

    function AdicionarController(urlService, urlFactory) {
        let vm = this;

        vm.usuario = new Usuario();
        vm.submit = addUsuario;
        vm.voltar = urlService.voltarPagPrincipal;

        function addUsuario(isValid) {
            if (isValid) {
                if (insertUser(vm.usuario)) {
                    window.location = urlFactory.getUrl('main');
                }
            }
        }
    }
})();
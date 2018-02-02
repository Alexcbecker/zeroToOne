(function() {
    'use strict';

    angular
        .module('adicionarApp', ['zeroToOne'])
        .controller('AdicionarController', AdicionarController);

    AdicionarController.$inject = ['urlService', 'urlFactory'];

    function AdicionarController(urlService, urlFactory) {
        let vm = this;

        vm.usuario = new Usuario();
        vm.addUsuario = addUsuario;
        vm.voltar = urlService.voltarPagPrincipal;

        function addUsuario() {
            try {
                if (vm.usuario.nome.length < 3) {
                    throw new Error('Nome deve ter pelo menos 3 letras!');
                } else if (vm.usuario.nome.length > 20) {
                    throw new Error('Nome deve ter no máximo 20 letras!');
                }

                if (vm.usuario.sobrenome.length < 3) {
                    throw new Error('Sobrenome deve ter pelo menos 3 letras');
                } else if (vm.usuario.sobrenome.length > 20) {
                    throw new Error('Sobrenome deve ter no máximo 20 letras!');
                }

                if (vm.usuario.email.length < 3) {
                    throw new Error('E-mail deve ter pelo menos 3 letras!');
                } else {
                    let regx = new RegExp(/(.+)@(.+){2,}\.(.+){2,}/);
                    if (!regx.test(vm.usuario.email)) {
                        throw new Error('E-mail inválido!');
                    }
                }

                if (vm.usuario.setor.length < 2) {
                    throw new Error('Setor deve ter pelo menos 3 letras');
                } else if (vm.usuario.setor.length > 20) {
                    throw new Error('Setor deve ter no máximo 20 letras!');
                }

                if (!insertUser(vm.usuario)) {
                    return false;
                }

                window.location = urlFactory.getUrl('main');
            }
            catch (e) {
                window.alert(e.message);
            }
        }
    }
})();
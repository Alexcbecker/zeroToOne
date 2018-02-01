(function() {
    'use strict';
    
    angular
        .module('adicionarApp', [])
        .controller('AdicionarController', AdicionarController);

    function AdicionarController() {
        let vm = this;

        vm.usuario = new Usuario();
        vm.addUsuario = addUsuario;

        function addUsuario() {
            try {
                if (!vm.formUsuario.inputNome.$valid) {
                    throw new Error('Nome inválido!');
                }

                if (!vm.formUsuario.inputSobrenome.$valid) {
                    throw new Error('Sobrenome inválido');
                }

                if (!vm.formUsuario.inputEmail.$valid) {
                    throw new Error('E-mail inválido!');
                } else {
                    let regx = new RegExp(/(.+)@(.+){2,}\.(.+){2,}/);
                    if (!regx.test(vm.usuario.email)) {
                        throw new Error('E-mail inválido!');
                    }
                }

                if (!vm.formUsuario.inputSetor.$valid) {
                    throw new Error('Setor inválido!');
                }

                if (!insertUser(vm.usuario)) {
                    return false;
                }

                window.location = "index.html";
            }
            catch (e) {
                window.alert(e.message);
            }
        }
    }
})();
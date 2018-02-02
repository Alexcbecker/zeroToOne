(function() {
    'use strict';

    angular
        .module('indexApp', ['zeroToOne'])
        .controller('IndexController', IndexController);

    IndexController.$inject = ['urlFactory'];

    function IndexController(urlFactory) {
        let vm = this;

        vm.usuarios = selectAllUsers();
        vm.adicionar = adicionar;
        vm.consultar = acaoBotao;
        vm.alterar = acaoBotao;
        vm.excluir = acaoBotao;

        function acaoBotao(tipoAcao) {
            let selecionados = getIdsSelecionados();
            if (selecionados.length != 1) {
                window.alert(`Selecione uma e não mais linhas para ${urlFactory.getAcao(tipoAcao)}!`);
                return;
            }

            window.location = `${urlFactory.getUrl(tipoAcao)}?id=${selecionados[0]}`;
        }

        function adicionar() {
            window.location = `${urlFactory.getUrl('C')}`;
        }

        function getIdsSelecionados() {
            let lista = [];
            for (var idx in vm.usuarios) {
                if (vm.usuarios[idx].selecionado) {
                    lista.push(vm.usuarios[idx].id);
                }
            }
            return lista;
        }
    }
})();
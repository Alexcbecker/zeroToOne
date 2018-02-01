(function() {
    'use strict';

    let params = getUrlParameters();

    if (!params['id']) {
        throw new Error('ID não informado!');
    }

    let usuarioObj = getUsuarioById(params['id']);

    if ($.isEmptyObject(usuarioObj)) {
        throw new Error(`Usuário ${params['id']} não encontrado!`);
    }

    $('#inputId').val(usuarioObj.id);
    $('#inputNome').val(usuarioObj.nome);
    $('#inputSobrenome').val(usuarioObj.sobrenome);
    $('#inputEmail').val(usuarioObj.email);
    $('#inputSetor').val(usuarioObj.setor);
})();
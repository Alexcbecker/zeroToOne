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

function alterarUsuarioFn(theForm, event) {
    event.preventDefault();

    let usuarioObj = criarUsuario(theForm);
    usuarioObj.id = theForm.inputId.value;

    function criarUsuario(form) {
        return {
            id: 0,
            nome: form.inputNome.value,
            sobrenome: form.inputSobrenome.value,
            email: form.inputEmail.value,
            setor: form.inputSetor.value
        }
    }

    if (!alterarUsuario(usuarioObj)) {
        return false;
    }

    window.location = "index.html";
}
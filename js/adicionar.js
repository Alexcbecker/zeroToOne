'use strict';

function addUsuario(theForm) {
    let usuarioObj = criarUsuario(theForm);

    function criarUsuario(form) {
        return {
            nome: form.inputNome.value,
            sobrenome: form.inputSobrenome.value,
            email: form.inputEmail.value,
            setor: form.inputSetor.value
        }
    }

    /* Validações */
    console.log(usuarioObj);

    return inserirUsuario(usuarioObj);
}
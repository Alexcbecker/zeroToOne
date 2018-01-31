'use strict';

function addUsuario(theForm, event) {
    event.preventDefault();

    let usuarioObj = criarUsuario(theForm);

    function criarUsuario(form) {
        return {
            id: 0,
            nome: form.inputNome.value,
            sobrenome: form.inputSobrenome.value,
            email: form.inputEmail.value,
            setor: form.inputSetor.value
        }
    }

    try {
        if (usuarioObj.nome.length < 3) {
            throw new Error('Nome deve ter pelo menos 3 letras!');
        }
        if (usuarioObj.sobrenome.length < 3) {
            throw new Error('Sobrenome deve ter pelo menos 3 letras!');
        }
        let regx = new RegExp(/(.+)@(.+){2,}\.(.+){2,}/);
        if (!regx.test(usuarioObj.email)) {
            throw new Error('E-mail inválido!');
        }
        if (usuarioObj.sobrenome.length < 2) {
            throw new Error('Setor deve ter pelo menos 2 letras!');
        }

        if (!inserirUsuario(usuarioObj)) {
            return false;
        }

        window.location = "index.html";
    }
    catch (e) {
        window.alert(e.message);
        throw new Error(e.message);
    }
}
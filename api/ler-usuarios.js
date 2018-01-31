'use strict';

function buscarUsuarios() {
    let usuarios = [];

    $.ajax({
        url: '../db/usuarios.json',
        method: 'GET',
        dataType: 'json',
        async: false,
        success: tratarUsuariosLidos,
        error: tratarErroUsuarios
    });

    function tratarUsuariosLidos(dados) {
        usuarios = dados;
    }

    function tratarErroUsuarios(jqXHR, status, message) {
        if (message === 'Not Found') {
            usuarios = [{
                "id": "db",
                "nome": "file",
                "sobrenome": "(usuarios.json)",
                "email": "não",
                "setor": "encontrado"
            }];
        }
    }

    return usuarios;
}
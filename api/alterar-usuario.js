'use strict';

function alterarUsuario(usuarioObj) {
    if (!checkLocalStorage()) {
        return false;
    }

    try {
        let usuariosArray = getTodosUsuarios(),
            novoArray = [];

        for (var idx in usuariosArray) {
            if (parseInt(usuariosArray[idx].id) === parseInt(usuarioObj.id)) {
                novoArray.push(usuarioObj);
            }
            else {
                novoArray.push(usuariosArray[idx]);
            }
        }

        window.localStorage.removeItem('zto_db');
        window.localStorage.setItem('zto_db', JSON.stringify(novoArray));
        return true;
    }
    catch (e) {
        console.error('alterarUsuario exception: ', e);
        if (e.name == 'QUOTA_EXCEEDED_ERR') {
            window.alert('Limite de armazenamento local atingigo!');
            return false;
        }
    }
}
'use strict';

function inserirUsuario(usuarioObj) {
    if (!checkLocalStorage()) {
        return false;
    }

    try {
        let usuariosArray = getTodosUsuarios();

        if (usuariosArray.length == 0) {
            usuarioObj.id = 1;
        }
        else {
            let maior = 0;
            for (var idx in usuariosArray) {
                if (parseInt(usuariosArray[idx].id) > maior) {
                    maior = parseInt(usuariosArray[idx].id);
                }

            }
            usuarioObj.id = maior + 1;
        }

        usuariosArray.push(usuarioObj);

        window.localStorage.removeItem('zto_db');
        window.localStorage.setItem('zto_db', JSON.stringify(usuariosArray));
        return true;
    }
    catch (e) {
        console.error('inserirUsuario exception: ', e);
        if (e.name == 'QUOTA_EXCEEDED_ERR') {
            window.alert('Limite de armazenamento local atingigo!');
            return false;
        }
    }
}
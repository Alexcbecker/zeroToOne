'use strict';

function inserirUsuario(usuarioObj) {
    if (!checkLocalStorage()) {
        return false;
    }

    try {
        let usuariosArray = getTodosUsuarios();

        usuarioObj.id = usuariosArray.length +1;
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
'use strict';

function deleteUser(userObj) {
    if (!userObj.id) {
        return false;
    }

    if (!checkDb()) {
        return false;
    }

    try {
        let usuariosArray = selectAllUsers(),
            novoArray = [];

        for (var idx in usuariosArray) {
            if (parseInt(usuariosArray[idx].id) !== parseInt(userObj.id)) {
                novoArray.push(usuariosArray[idx]);
            }
        }
        

        window.localStorage.removeItem('zto_db');
        window.localStorage.setItem('zto_db', JSON.stringify(novoArray));
        return true;
    }
    catch (e) {
        console.error('excluirUsuarioById exception: ', e);
        if (e.name == 'QUOTA_EXCEEDED_ERR') {
            window.alert('Limite de armazenamento local atingigo!');
            return false;
        }
    }
}
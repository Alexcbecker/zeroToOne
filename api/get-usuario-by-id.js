function getUsuarioById(id) {
    if (!id) {
        return {};
    }

    if (!checkLocalStorage()) {
        return false;
    }

    let zto_db = window.localStorage.getItem('zto_db');

    if (zto_db) {
        let usuariosArray = JSON.parse(zto_db);

        for (var idx in usuariosArray) {
            if (parseInt(usuariosArray[idx].id) === parseInt(id)) {
                return usuariosArray[idx];
            }
        }
    }

    return {};
}
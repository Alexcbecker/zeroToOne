'use strict';

function getTodosUsuarios() {
    let zto_db = window.localStorage.getItem('zto_db');
    return zto_db || [];
}
function selectAllUsers() {
    'use strict';

    if (!checkDb()) {
        return [];
    }

    let zto_db = window.localStorage.getItem('zto_db');
    if (zto_db) {
        return JSON.parse(zto_db);
    }

    return [];
}

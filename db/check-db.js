function checkDb() {
    'use strict';

    if (typeof window.localStorage === 'undefined') {
        window.alert('Local Storage não disponível!');
        return false;
    }

    return true;
}

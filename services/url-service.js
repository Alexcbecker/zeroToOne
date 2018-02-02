(function() {
    'use strict';

    angular
        .module('zeroToOne')
        .service('urlService', urlService);

    function urlService() {
        this.getUrlParameter = function(param) {
            // Fonte: https://jquery-howto.blogspot.com.br/2009/09/get-url-parameters-values-with-jquery.html
            var vars = [], hash;
            var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
            for(var i = 0; i < hashes.length; i++)
            {
                hash = hashes[i].split('=');
                vars.push(hash[0]);
                vars[hash[0]] = hash[1];
            }
            if (vars[param]) {
                return vars[param];
            }
            return undefined;
        };
        this.voltarPagPrincipal = function() {
            window.location = "index.html";
        };
    }
})();

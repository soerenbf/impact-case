(function() {
    'use strict';

    angular
        .module('app')
        .factory('common', common);

    common.$inject = [];

    /* @ngInject */
    function common() {
        var service = {
            wineApiKey: ''
        };

        return service;
    }
})();

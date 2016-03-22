(function() {
    'use strict';

    angular
        .module('app')
        .factory('common', common);

    common.$inject = [];

    /* @ngInject */
    function common() {
        var service = {
            wineApiKey: 'c332a87bf233acb72799d59531a09cdc'
        };

        return service;
    }
})();

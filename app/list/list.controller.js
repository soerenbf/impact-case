(function() {
    'use strict';

    angular
        .module('app')
        .controller('ListController', ListController);

    ListController.$inject = [];

    /* @ngInject */
    function ListController() {
        var vm = this;

        activate();

        function activate() {

        }
    }
})();

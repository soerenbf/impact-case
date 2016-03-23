(function() {
    'use strict';

    angular
        .module('app')
        .controller('ListItemController', ListItemController);

    ListItemController.$inject = [];

    /* @ngInject */
    function ListItemController() {
        var vm = this;

        vm.name = '';
        vm.varietal = '';
        vm.year = '';
        vm.rating = 0;

        activate();

        function activate() {

        }
    }
})();

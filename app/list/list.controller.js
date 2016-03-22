(function() {
    'use strict';

    angular
        .module('app')
        .controller('ListController', ListController);

    ListController.$inject = ['dataservice'];

    /* @ngInject */
    function ListController(dataservice) {
        var vm = this;
        vm.wines;

        activate();

        function activate() {
            getWines();
        }

        function getWines() {
            dataservice.getWines().then(function(wines) {
                vm.wines = wines;
            });
        }
    }
})();

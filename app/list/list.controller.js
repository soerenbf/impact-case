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
        vm.showNewWine = false;
        vm.newWineButtonText = vm.showNewWine ? '-' : '+';
        vm.toggleNewWine = toggleNewWine;

        //New Wine Form model
        vm.newWine = {
            name: '',
            varietal: '',
            year: '',
            rating: 0
        };

        activate();

        function activate() {
            getWines();
        }

        function getWines() {
            dataservice.getWines().then(function(wines) {
                vm.wines = wines;
            });
        }

        function toggleNewWine() {
            vm.showNewWine = !vm.showNewWine;
            vm.newWineButtonText = vm.showNewWine ? '-' : '+';

            if (!vm.showNewWine) {
                resetForm();
            }

        }

        function addWine(name, varietal, year, rating) {
            dataservice.addWine(name, varietal, year)/*.then(function(wines) {
                vm.wines = wines;
            })*/;
        }

        function resetForm() {
            vm.newWine = {
                name: '',
                varietal: '',
                year: '',
                rating: 0
            };
        }
    }
})();

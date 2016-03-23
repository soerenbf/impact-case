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
        vm.newWine = {name: '', varietal: '', year: '', rating: 0};
        vm.toggleNewWine = toggleNewWine;
        vm.setRating = setRating;
        vm.starIsInactive = starIsInactive;
        vm.submitNewWine = submitNewWine;

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

        function setRating(rating) {
            vm.newWine.rating = rating;
        }

        function starIsInactive(index) {
            return index > vm.newWine.rating;
        }

        function submitNewWine() {

        }

        function resetForm() {
            vm.newWine.name = '';
            vm.newWine.varietal = '';
            vm.newWine.year = '';
            vm.newWine.rating = 0;
        }
    }
})();

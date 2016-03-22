(function() {
    'use strict';

    angular
        .module('app')
        .controller('DetailController', DetailController);

    DetailController.$inject = ['$stateParams', 'dataservice'];

    /* @ngInject */
    function DetailController($stateParams, dataservice) {
        var vm = this;

        //From datamodel.
        vm.id = $stateParams.id;
        vm.name = '';
        vm.varietal = '';
        vm.year = '';

        //From api.wine.com
        vm.imageUrl;
        vm.category;

        activate();

        function activate() {
            getWine(vm.id);
        }

        function getWine(id) {
            dataservice.getWineById(id).then(function(wine) {
                vm.name = wine.name;
                vm.varietal = wine.varietal;
                vm.year = wine.year;

                if (wine.externalId) {
                    getExternalInfo(wine.externalId);
                }
            });
        }

        function getExternalInfo(externalId) {
            dataservice.getExternalWineInfo(externalId).then(function(wineInfo) {
                vm.category = wineInfo.category;
                vm.imageUrl = wineInfo.imageUrl;
            });
        }
    }
})();

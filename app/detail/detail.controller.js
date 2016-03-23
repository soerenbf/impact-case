(function() {
    'use strict';

    angular
        .module('app')
        .controller('DetailController', DetailController);

    DetailController.$inject = ['dataservice', 'wineData'];

    /* @ngInject */
    function DetailController(dataservice, wineData) {
        var vm = this;

        console.log(wineData);

        //From datamodel.
        vm.id = wineData.id;
        vm.name = wineData.name;
        vm.varietal = wineData.varietal;
        vm.year = wineData.year;
        vm.rating = wineData.rating;
        vm.externalId = wineData.externalId;

        //From api.wine.com
        vm.imageUrl = wineData.imageUrl;
        vm.category = wineData.category;

        activate();

        function activate() {
            if (vm.externalId) {
                getExternalInfo(vm.externalId);
            }
        }

        function getExternalInfo(externalId) {
            dataservice.getExternalWineInfo(externalId).then(function(wineInfo) {
                vm.category = wineInfo.category;
                vm.imageUrl = wineInfo.imageUrl;
            });
        }
    }
})();

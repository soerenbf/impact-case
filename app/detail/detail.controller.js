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
        vm.externalLinks;

        vm.linkWithApi = linkWithApi;

        activate();

        function activate() {
            if (vm.externalId) {
                getExternalInfo(vm.externalId);
            } else {
                searchForExternalId(vm.name, vm.varietal, vm.year);
            }
        }

        function getExternalInfo(externalId) {
            dataservice.getExternalWineInfo(externalId).then(function(wineInfo) {
                vm.category = wineInfo.category;
                vm.imageUrl = wineInfo.imageUrl;
            });
        }

        function searchForExternalId(name, varietal, year) {
            console.log('Searching...');
            dataservice.searchExternalApi(name, varietal, year).then(function(externalWines) {
                if (externalWines.length > 0) {
                    vm.externalLinks = externalWines;
                }
            });
        }

        function linkWithApi(externalId) {
            for (var i = 0; i < vm.externalLinks.length; i++) {
                var link = vm.externalLinks[i];
                if (link.externalId == externalId) {
                    dataservice.linkWineToExternalWine(vm.id, link).then(function(wine) {
                        vm.externalId = wine.externalId;
                        getExternalInfo(vm.externalId);
                    });
                }
            }
        }
    }
})();

(function() {
    'use strict';

    angular
        .module('app')
        .service('DataModel', DataModel);

    DataModel.$inject = [];

    /* @ngInject */
    function DataModel() {
        var wines;
        var idCount;

        this.getWines = getWines;
        this.getWineById = getWineById;
        this.addWine = addWine;
        this.linkWine = linkWine;

        activate();

        function activate() {
            wines = [
                {id: 1, externalId: 144436, name: 'Bertani Valpolicella', year: 2011, varietal: 'Ripasso', rating: 3},
                {id: 2, externalId: 151951, name: 'Dom Perignon', year: 2003, varietal: 'Rosé', rating: 5},
                {id: 3, externalId: 131268, name: 'Cloudy Bay', year: 2012, varietal: 'Chardonnay', rating: 4}
            ];
            idCount = wines.length;
        }

        function getWines() {
            return wines;
        }

        function getWineById(id) {

            //return wines.filter((wine)=>wine.id=id)[0];

            var wine;

            for (var i = 0; i < wines.length; i++) {
                wine = wines[i];

                if (wine.id == id) {
                    return wine;
                }
            }

            return 'Could not find wine';
        }

        function addWine(wineObj) {
            var topId = 0;
            var wine;

            for (var i = 0; i < wines.length; i++) {
                wine = wines[i];

                if (wine.id > topId) {
                    topId = wine.id;
                }
            }

            wineObj.id = topId + 1;
            wines.push(wineObj);

            return wines;
        }

        function linkWine(id, externalLink) {
            var wine = getWineById(id);
            wine.externalId = externalLink.externalId;

            return wine;
        }
    }
})();

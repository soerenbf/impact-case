(function() {
    'use strict';

    angular
        .module('app')
        .service('DataModel', DataModel);

    DataModel.$inject = [];

    /* @ngInject */
    function DataModel() {
        var wines;

        this.getWines = getWines;
        this.getWineById = getWineById;
        this.addWine = addWine;

        activate();

        function activate() {
            wines = [
                {id: 1, externalId: 144436, name: 'Bertani Valpolicella', year: 2011, varietal: 'Ripasso', rating: 3},
                {id: 2, externalId: 151951, name: 'Dom Perignon', year: 2003, varietal: 'Rosé', rating: 5},
                {id: 3, externalId: 131268, name: 'Cloudy Bay', year: 2012, varietal: 'Chardonnay', rating: 4}
            ];
        }

        function getWines() {
            return wines;
        }

        function getWineById(id) {
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

        }
    }
})();

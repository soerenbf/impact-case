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
                {externalId: 144436, name: 'Bertani Valpolicella', year: 2011, varietal: 'Ripasso', rating: 3},
                {externalId: 151951, name: 'Dom Perignon', year: 2003, varietal: 'Rosé', rating: 5},
                {externalId: 131268, name: 'Cloudy Bay', year: 2012, varietal: 'Chardonnay', rating: 4}
            ];
        }

        function getWines() {
            return wines;
        }

        function getWineById(id) {
            return wines[id] || 'Could not find wine';
        }

        function addWine(wineObj) {

        }
    }
})();

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

        activate();

        function activate() {
            wines = [
                {id: 144436, name: 'Bertani Valpolicella', year: 2011, type: 'Ripasso', rating: 3.5},
                {id: 151951, name: 'Dom Perignon', year: 2003, type: 'Rosé', rating: 4},
                {id: 131268, name: 'Cloudy Bay', year: 2012, type: 'Chardonnay', rating: 5}
            ];
        }

        function getWines() {
            return wines;
        }

        function getWineById(id) {
            
        }
    }
})();

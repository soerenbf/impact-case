(function() {
    'use strict';

    angular
        .module('app')
        .service('DataModel', DataModel);

    DataModel.$inject = [];

    /* @ngInject */
    function DataModel() {
        this.getPeople = getPeople;

        function getPeople() {
            var people = [
                {name: 'Søren', age: 27},
                {name: 'Zennia', age: 22}
            ];
            return people;
        }
    }
})();

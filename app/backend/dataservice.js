(function() {
    'use strict';

    angular
        .module('app')
        .service('dataservice', dataservice);

    dataservice.$inject = ['$http'];

    /* @ngInject */
    function dataservice($http) {

        this.getWines = getWines;

        function getWines() {
            return $http.get('/wines').then(function(response) {
                return response.data;
            });
        }
    }
})();

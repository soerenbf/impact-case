(function() {
    'use strict';

    angular
        .module('app')
        .service('dataservice', dataservice);

    dataservice.$inject = ['$http', 'common'];

    /* @ngInject */
    function dataservice($http, common) {
        var apiBasePath = 'http://services.wine.com/api/beta2/service.svc/JSON/catalog';

        this.getWines = getWines;
        this.getWineById = getWineById;
        this.addWine = addWine;
        this.getExternalWineInfo = getExternalWineInfo;

        function getWines() {
            return $http.get('/wines').then(function(response) {
                return response.data;
            });
        }

        function getWineById(id) {
            return $http.get('/wine/' + id).then(function(response) {
                return response.data;
            });
        }

        function addWine(name, varietal, year, rating) {
            console.log('Adding wine: ' + name + ' ' + varietal + ' ' + year);
        }

        function linkWineToExternalWine(wineId, externalId) {
            console.log('Linking wine: ' + wineId + ' and ' + externalId);
        }

        function getExternalWineInfo(externalId) {
            var url = apiBasePath + '?filter=product(' + externalId + ')&apikey=' + common.wineApiKey;

            return $http.get(url).then(function(response) {
                var wine = response.data.Products.List[0];

                var obj = {
                    category: wine.Varietal.WineType.Name,
                    imageUrl: wine.Labels[1].Url
                };
                return obj;
            });
        }
    }
})();

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

(function() {
    'use strict';

    angular
        .module('app')
        .service('dataservice', dataservice);

    dataservice.$inject = ['$http'];

    /* @ngInject */
    function dataservice($http) {
        var apiBasePath = 'http://services.wine.com/api/beta2/service.svc/JSON/catalog';
        var apiKey = 'c332a87bf233acb72799d59531a09cdc';

        this.getWines = getWines;
        this.getWineById = getWineById;
        this.addWine = addWine;
        this.getExternalWineInfo = getExternalWineInfo;
        this.searchExternalApi = searchExternalApi;
        this.linkWineToExternalWine = linkWineToExternalWine;

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

        function addWine(wineObj) {
            return $http.post('/wine/add', wineObj).then(function(response) {
                return response.data;
            });
        }

        function searchExternalApi(name, varietal, year) {
            var url = apiBasePath + '?search=' + name + '+' + varietal + '+' + year + '&size=3&offset=0&apikey=' + apiKey;
            return $http.get(url).then(function(response) {
                var wines = [];
                var wineList = response.data.Products.List;

                for (var i = 0; i < wineList.length; i++) {
                    var externalWine = wineList[i];

                    var wine = {
                        name: externalWine.Name,
                        externalId: externalWine.Id,
                        imageUrl: externalWine.Labels[0].Url
                    };

                    wines.push(wine);
                }

                return wines;
            });
        }

        function linkWineToExternalWine(wineId, externalLink) {
            var link = {id: wineId, ext: externalLink};
            return $http.post('/wine/link', link).then(function(response) {
                return response.data;
            });
        }

        function getExternalWineInfo(externalId) {
            var url = apiBasePath + '?filter=product(' + externalId + ')&apikey=' + apiKey;
            return $http.get(url).then(function(response) {
                var externalWine = response.data.Products.List[0];

                var wine = {
                    category: externalWine.Varietal.WineType.Name,
                    imageUrl: externalWine.Labels[1].Url
                };
                return wine;
            });
        }
    }
})();

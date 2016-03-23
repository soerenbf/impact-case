(function () {
    'use strict'

    angular
        .module('app')
        .config(routeConfig);

    routeConfig.$inject = ['$stateProvider'];

    function routeConfig($stateProvider, dataservice) {
        $stateProvider.state('wine', {
            url: '/wine/:id',
            resolve: {
                wineData: wineData
            },
            views: {
                'main': {
                    controller: 'DetailController',
                    controllerAs: 'detailCtrl',
                    templateUrl: 'detail/detail.html'
                }
            }
        });

        wineData.$inject = ['$stateParams', 'dataservice'];

        function wineData($stateParams, dataservice) {
            return dataservice.getWineById($stateParams.id).then(function(wine) {
                return wine;
            });
        }
    }
})();

(function () {
    'use strict'

    angular
        .module('app')
        .config(routeConfig);

    routeConfig.$inject = ['$stateProvider'];

    function routeConfig($stateProvider) {
        $stateProvider.state('wine', {
            url: '/wine/:id',
            views: {
                'main': {
                    controller: 'DetailController',
                    controllerAs: 'detailCtrl',
                    templateUrl: 'detail/detail.html'
                }
            }
        });
    }
})();

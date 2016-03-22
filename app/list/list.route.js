(function () {
    'use strict'

    angular
        .module('app')
        .config(routeConfig);

    routeConfig.$inject = ['$stateProvider'];

    function routeConfig($stateProvider) {
        $stateProvider.state('list', {
            url: '/',
            views: {
                'main': {
                    controller: 'ListController',
                    controllerAs: 'listCtrl',
                    templateUrl: 'list/list.html'
                }
            }
        });
    }
})();

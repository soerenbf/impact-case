(function () {
    angular.module('app')
        .config(['$stateProvider', '$urlRouterProvider', function appConfig($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/');
        }])
})();

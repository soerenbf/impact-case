(function () {
    angular.module('app')
        .controller('AppController', AppController);

    AppController.$inject = [];

    function AppController() {

        vm = this;
        vm.pageTitle ='Filips Fine Wines';
    };
})();

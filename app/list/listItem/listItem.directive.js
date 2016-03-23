(function() {
    'use strict';

    angular
        .module('app')
        .directive('listItem', listItem);

    /* @ngInject */
    function listItem() {
        var directive = {
            restrict: 'EA',
            templateUrl: 'list/listItem/listItem.html',
            link: linkFunc
        };

        return directive;

        function linkFunc(scope, el, attr) {
            if (!scope.wine) {
                scope.wine = scope.listCtrl.newWine;

                scope.$watch(function() {
                    return scope.listCtrl.newWine;
                }, function(newVal, oldVal) {
                    scope.wine = newVal;
                }, true);
            }
        }
    }
})();

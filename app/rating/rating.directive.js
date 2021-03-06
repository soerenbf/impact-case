(function() {
    'use strict';

    angular
        .module('app')
        .directive('wineRating', wineRating);

    wineRating.$inject = [];

    function wineRating() {
        var directive = {
            restrict: 'EA',
            templateUrl: 'rating/rating.html',
            link: linkFunc,
            scope: {}
        };

        return directive;

        function linkFunc(scope, el, attr, ctrl) {
            scope.rating = attr.rating || 0;
            scope.setRating = attr.interactive != undefined ? setRating : undefined;
            scope.isInactive = isInactive;

            scope.$on('ratingReset', handleRatingReset);

            function setRating(rating) {
                scope.rating = rating;
                scope.$root.$broadcast('ratingUpdate', rating);
            }

            function isInactive(index) {
                return index > scope.rating;
            }

            function handleRatingReset() {
                scope.rating = 0;
            }
        }
    }
})();

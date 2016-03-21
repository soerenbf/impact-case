(function() {
    'use strict';

    angular
        .module('app')
        .run(backendMock);

    function backendMock($httpBackend, DataModel) {
        $httpBackend.whenGET(/\.html/).passThrough();

        function makeResponseWithData(data) {
            return [200, data, {}];
        }
    }
}());

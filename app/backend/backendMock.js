(function() {
    'use strict';

    angular
        .module('app')
        .run(backendMock);

    function backendMock($httpBackend, DataModel) {
        $httpBackend.whenGET('/wines').respond(function(method, url, data) {
            return makeResponseWithData(DataModel.getWines());
        });

        $httpBackend.whenGET(/\/wine\/\d+/).respond(function(method, url, data) {
            var wineId = url.split('/')[2];
            console.log('wine id: ' + wineId);
            return makeResponseWithData(DataModel.getWineById(wineId));
        });

        $httpBackend.whenGET(/\http:\/\/services\.wine\.com\/api/).passThrough();
        $httpBackend.whenGET(/\.html/).passThrough();

        function makeResponseWithData(data) {
            return [200, data, {}];
        }
    }
}());

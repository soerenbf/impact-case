'use strict';

describe('DataModel', function() {

    beforeEach(module('app'));

    it('should have two people', inject(function(DataModel) {
        expect(DataModel.getPeople().length).toBe(2);
    }));
});

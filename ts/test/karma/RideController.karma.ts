/// <reference path="../../reference.karma.ts" />

module example.test.unit {
  describe("Unit: RideController", () => {
    // needed for html template loading
    //beforeEach(module('templates'));
    beforeEach(module('example'));

    var controller:any;
    var scope:any;
    var $httpBackend:any;

    beforeEach(inject(($injector) => {
      $httpBackend = $injector.get('$httpBackend');
      scope = $injector.get('$rootScope').$new();
      controller = $injector.get('$controller')('example.components.RideController', {$scope: scope});
    }));

    it('should load rides from server into scope and calculate sum', () => {
        var rideList = [{date: null, km: 20}, {date: null, km: 50}];
        $httpBackend.whenGET('/api/rides').respond(rideList);
        scope.getRides();
        $httpBackend.flush();
        expect(scope.total).toEqual(70);
        expect(scope.rides).toEqual(rideList);
      }
    );

    it('should save ride and populate list', () => {
        $httpBackend.whenGET('/api/rides').respond([]);
        $httpBackend.flush();
        expect(scope.rides.length).toEqual(0);
        var ride = {date: null, km: 20};
        scope.ride = ride;

        spyOn(scope, 'getRides');

        $httpBackend.whenPUT('/api/ride').respond(200);
        scope.saveRide();
        $httpBackend.flush();
        expect(scope.ride).toBeNull();
        expect(scope.getRides).toHaveBeenCalled();
      }
    );
    it('should display error when server returns error', () => {
        spyOn(window, 'alert');
        $httpBackend.whenGET('/api/rides').respond(500);
        $httpBackend.flush();
        expect(window.alert).toHaveBeenCalledWith('there was a backend error loading list of rides');

      }
    );
  });
}

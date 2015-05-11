/// <reference path="../reference.ts"/>
var example;
(function (example) {
    var components;
    (function (components) {
        var RideController = (function () {
            function RideController($scope, $http) {
                $scope.getRides = function () {
                    $scope.rides = $http.get('/api/rides').success(function (rides) {
                        $scope.rides = rides;
                    });
                };
                $scope.saveRide = function () {
                    if ($scope.ride) {
                        $http.put('/api/ride', { 'ride': $scope.ride }).success(function () {
                            $scope.ride = null;
                            $scope.getRides();
                        }).error(function () {
                            //TODO do nice message
                            alert('error');
                        });
                        console.log($scope.ride);
                    }
                };
                $scope.getRides();
            }
            RideController.$inject = ['$scope', '$http'];
            return RideController;
        })();
        components.RideController = RideController;
        angular.module('example').controller('example.components.RideController', RideController);
    })(components = example.components || (example.components = {}));
})(example || (example = {}));

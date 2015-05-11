/// <reference path="../reference.ts"/>
module example.components {
    export interface RideScope extends angular.IScope {
        getRides():void;
        saveRide():void;
        getSingleUser(id:number):void;
        ride:example.interfaces.Ride;
        rides:Array<example.interfaces.Ride>;
    }

    export class RideController {
        constructor($scope:RideScope, $http) {
            $scope.getRides = () => {
                $scope.rides = $http.get('/api/rides').success((rides:Array<example.interfaces.Ride>) => {
                    $scope.rides = rides;
                });
            };
            $scope.saveRide = () => {
                if ($scope.ride) {
                    $http.put('/api/ride', {'ride': $scope.ride}).success(()=> {
                        $scope.ride = null;
                        $scope.getRides();
                    }).error(()=> {
                        //TODO do nice message
                        alert('error');
                    });
                    console.log($scope.ride);
                }
            };

            $scope.getRides();
        }

        public static $inject = ['$scope', '$http'];
    }

    angular.module('example').controller('example.components.RideController', RideController);
}
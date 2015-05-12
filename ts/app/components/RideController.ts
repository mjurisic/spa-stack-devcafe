/// <reference path="../../reference.ts"/>
module example.components {
  export interface RideScope extends ng.IScope {
    getRides():void;
    saveRide():void;
    getSingleUser(id:number):void;
    ride:example.interfaces.Ride;
    rides:Array<example.interfaces.Ride>;
    total:number;
  }

  export class RideController {
    constructor($scope:RideScope, $http) {
      $scope.getRides = () => {
        $scope.rides = $http.get('/api/rides').success((rides:Array<example.interfaces.Ride>) => {
          if (rides) {
            $scope.rides = rides;
            $scope.total = rides.reduce((prev:number, curr:example.interfaces.Ride)=> {
              return prev + curr.km;
            }, 0.0);
          }
        }).error(()=> {
          //TODO do nice message
          alert('there was a backend error loading list of rides')
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
        }
      };

      $scope.getRides();
    }

    public static $inject = ['$scope', '$http'];
  }

  angular.module('example').controller('example.components.RideController', RideController);
}
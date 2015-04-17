/// <reference path="../reference.ts"/>
module example.components {
    export interface MyScope extends angular.IScope {
        getUsers():void;
        getSingleUser(id:number):void;
        users:Array<example.interfaces.User>;
        selectedUser:example.interfaces.User;
    }
    export class UserController {
        constructor($scope:MyScope, $routeParams) {
            $scope.getUsers = () => {
                // in real world we would get probably load this from db and get it from server via rest request
                $scope.users = [
                    {
                        id: 1,
                        firstname: 'john',
                        lastname: 'doe'
                    }, {
                        id: 2,
                        firstname: 'jane',
                        lastname: 'dove'
                    }
                ];
            };

            $scope.getSingleUser = (id:number) => {
                if (!$scope.users) {
                    $scope.getUsers();
                }
                $scope.selectedUser = null;

                for (var i =0; i < $scope.users.length; i++) {
                    if ($scope.users[i].id == id) {
                        $scope.selectedUser = $scope.users[i];
                    }
                }
            };

            if ($routeParams && $routeParams.userId) {
                $scope.getSingleUser($routeParams.userId);
            } else {
                $scope.getUsers();
            }
        }
        public static $inject = ['$scope', '$routeParams'];
    }

    angular.module('example').controller('example.components.UserController', UserController);
}
/// <reference path="../reference.ts"/>
var example;
(function (example) {
    var components;
    (function (components) {
        var UserController = (function () {
            function UserController($scope) {
                $scope.getUsers = function () {
                    // in real world we would get probably load this from db and get it from server via rest request
                    var users = [
                        {
                            id: 1,
                            firstname: 'john',
                            lastname: 'doe'
                        },
                        {
                            id: 2,
                            firstname: 'jane',
                            lastname: 'dove'
                        }
                    ];
                    $scope.users = users;
                };
            }
            UserController.$inject = ['$scope'];
            return UserController;
        })();
        components.UserController = UserController;
        angular.module('example').controller('example.UserController', UserController);
    })(components = example.components || (example.components = {}));
})(example || (example = {}));

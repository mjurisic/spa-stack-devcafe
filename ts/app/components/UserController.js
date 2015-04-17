/// <reference path="../reference.ts"/>
var example;
(function (example) {
    var components;
    (function (components) {
        var UserController = (function () {
            function UserController($scope, $routeParams) {
                $scope.getUsers = function () {
                    // in real world we would get probably load this from db and get it from server via rest request
                    $scope.users = [
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
                };
                $scope.getSingleUser = function (id) {
                    if (!$scope.users) {
                        $scope.getUsers();
                    }
                    $scope.selectedUser = null;
                    for (var i = 0; i < $scope.users.length; i++) {
                        if ($scope.users[i].id == id) {
                            $scope.selectedUser = $scope.users[i];
                        }
                    }
                };
                if ($routeParams && $routeParams.userId) {
                    $scope.getSingleUser($routeParams.userId);
                }
                else {
                    $scope.getUsers();
                }
            }
            UserController.$inject = ['$scope', '$routeParams'];
            return UserController;
        })();
        components.UserController = UserController;
        angular.module('example').controller('example.components.UserController', UserController);
    })(components = example.components || (example.components = {}));
})(example || (example = {}));
//# sourceMappingURL=UserController.js.map
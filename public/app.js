var example;
(function (example) {
    var ModuleConfig = (function () {
        function ModuleConfig($routeProvider) {
            $routeProvider.when('/users', {
                templateUrl: 'components/users.html',
                controller: 'example.components.UserController'
            }).when('/users/:userId', {
                templateUrl: 'components/user.html',
                controller: 'example.components.UserController'
            }).when('/rides', {
                templateUrl: 'components/rides.html',
                controller: 'example.components.RideController'
            }).when('/ride', {
                templateUrl: 'components/user.html',
                controller: 'example.components.UserController'
            }).otherwise({
                redirectTo: '/rides'
            });
        }
        ModuleConfig.$inject = ['$routeProvider'];
        return ModuleConfig;
    })();
    var exampleapp = angular.module('example', ['ngRoute', 'ui.grid']).config(ModuleConfig);
})(example || (example = {}));
;var example;
(function (example) {
    var components;
    (function (components) {
        var RideController = (function () {
            function RideController($scope, $http) {
                $scope.getRides = function () {
                    $scope.rides = $http.get('/api/rides').success(function (rides) {
                        if (rides) {
                            $scope.rides = rides;
                            $scope.total = rides.reduce(function (prev, curr) {
                                return prev + curr.km;
                            }, 0.0);
                        }
                    }).error(function () {
                        alert('there was a backend error loading list of rides');
                    });
                };
                $scope.saveRide = function () {
                    if ($scope.ride) {
                        $http.put('/api/ride', { 'ride': $scope.ride }).success(function () {
                            $scope.ride = null;
                            $scope.getRides();
                        }).error(function () {
                            alert('error');
                        });
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
;var example;
(function (example) {
    var components;
    (function (components) {
        var UserController = (function () {
            function UserController($scope, $routeParams) {
                $scope.getUsers = function () {
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
;;
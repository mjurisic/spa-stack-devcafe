/// <reference path="../reference.ts"/>
module example {
    class ModuleConfig {
        constructor($routeProvider) {
            $routeProvider
                .when('/users', {
                    templateUrl: 'components/users.html',
                    controller: 'example.components.UserController'
                })
                .when('/users/:userId', {
                    templateUrl: 'components/user.html',
                    controller: 'example.components.UserController'
                })
                .when('/rides', {
                    templateUrl: 'components/rides.html',
                    controller: 'example.components.RideController'
                })
                .when('/ride', {
                    templateUrl: 'components/user.html',
                    controller: 'example.components.UserController'
                })
                .otherwise({
                    redirectTo: '/rides'
                })
        }
        static $inject = ['$routeProvider'];
    }
    var exampleapp = angular.module('example', ['ngRoute', 'ui.grid']).config(ModuleConfig);
}
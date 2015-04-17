/// <reference path="reference.ts"/>
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
                .otherwise({
                    redirectTo: '/users'
                })
        }


        static $inject = ['$routeProvider'];
    }
    var exampleapp = angular.module('example', ['ngRoute']).config(ModuleConfig);
}
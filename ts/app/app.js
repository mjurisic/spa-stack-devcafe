/// <reference path="reference.ts"/>
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
            }).otherwise({
                redirectTo: '/users'
            });
        }
        ModuleConfig.$inject = ['$routeProvider'];
        return ModuleConfig;
    })();
    var exampleapp = angular.module('example', ['ngRoute']).config(ModuleConfig);
})(example || (example = {}));
//# sourceMappingURL=app.js.map
/// <reference path="../reference.ts"/>
var example;
(function (example) {
    var controllers;
    (function (controllers) {
        var ExampleController = (function () {
            function ExampleController($scope) {
                console.log('i am alive!!');
                $scope.foo = 'bar';
            }
            ExampleController.$inject = ['$scope'];
            return ExampleController;
        })();
        controllers.ExampleController = ExampleController;
        angular.module('example').controller('example.ExampleController', ExampleController);
    })(controllers = example.controllers || (example.controllers = {}));
})(example || (example = {}));

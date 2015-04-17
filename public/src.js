/// <reference path="reference.ts"/>
var mj;
(function (mj) {
    var example;
    (function (example) {
        angular.module('example', []);
    })(example = mj.example || (mj.example = {}));
})(mj || (mj = {}));
;/// <reference path="../reference.ts"/>
var example;
(function (example) {
    var controllers;
    (function (controllers) {
        var ExampleController = (function () {
            function ExampleController($scope) {
                console.log('i am alive!');
            }
            ExampleController.$inject = ['$scope'];
            return ExampleController;
        })();
        controllers.ExampleController = ExampleController;
        angular.module('example').controller('ExampleController', ExampleController);
    })(controllers = example.controllers || (example.controllers = {}));
})(example || (example = {}));
;/// <reference path="typings/angular/angular.d.ts"/> 

(function (angular) {
    var app = angular.module("register", ["ngRoute"])
        // .controller("registerCtrl", ["$scope", function ($scope) {


        // }])

    app.config(["$routeProvider", function ($routeProvider) {
        $routeProvider.when("/register", {
            templateUrl: "./login/register.html"
        }).when("/", {
            redirectTo: "/login"
        })
    }])



})(angular)
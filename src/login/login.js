(function (angular) {
    var app = angular.module("login", ["ngRoute"])
        // .controller("loginCtrl", ["$scope", function ($scope) {
          

        // }])

    app.config(["$routeProvider", function ($routeProvider) {
        $routeProvider.when("/login", {
            templateUrl: "./login/login.html"
        }).when("/", {
            redirectTo: "/login"
        })
    }])


})(angular)
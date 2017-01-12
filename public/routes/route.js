angular.module("myApp").config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "pages/main/main.html"
        })
        .when("/red", {
            templateUrl: "pages/testing/red.html"
        }).otherwise({
            redirectTo: '/'
        });
});

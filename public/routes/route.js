angular.module("myApp").config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "pages/main/main.html"
        })
        .when("/profile", {
            templateUrl: "pages/profile/profile.html"
        }).otherwise({
            redirectTo: '/'
        });
});

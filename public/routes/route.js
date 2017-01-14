angular.module("myApp").config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "pages/main/main.html",
        })
        .when("/profile", {
            templateUrl: "pages/profile/profile.html"
        })
        .when("/find_friend", {
            templateUrl: "pages/find_friend/find_friend.html",
            controller : "find_friendCtrl"
        })
        .when("/sell", {
            templateUrl: "pages/sell/sell.html",
            controller : "sellCtrl"
        })
        .when("/find_book", {
            templateUrl: "pages/find_book/find_book.html",
            controller : "find_bookCtrl"
        })
        .when("/followers", {
            templateUrl: "pages/followers/followers.html",
            controller : "followersCtrl"
        })
        .when("/following", {
            templateUrl: "pages/following/following.html",
            controller : "followingCtrl"
        })
        .when("/chat", {
            templateUrl: "pages/chat/chat.html",
            controller : "chatCtrl"
        })
        .otherwise({
            redirectTo: '/'
        });

        $locationProvider.html5Mode(true);
});

angular.module("myApp").config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "pages/main/main.html",
            controller: "mainCtrl"
        })
        .when("/profile", {
            templateUrl: "pages/profile/profile.html",
            resolve: {
                auth: function(User, $q, $timeout,$location) {
                    var deferred = $q.defer();
                    $timeout(function() {
                        if (User.getUser() == null) {
                            // user is not logged, do not proceed
                            // instead, go to a different page
                            $location.path('/');
                            deferred.reject();
                        } else {
                            // everything is fine, proceed
                            deferred.resolve();
                        }
                    });

                    return deferred.promise;
                }
            }
        })
        .when("/find_friend", {
            templateUrl: "pages/find_friend/find_friend.html",
            controller: "find_friendCtrl"
        })
        .when("/sell", {
            templateUrl: "pages/sell/sell.html",
            controller: "sellCtrl",
            resolve: {
                auth: function(User, $q, $timeout,$location) {
                    var deferred = $q.defer();
                    $timeout(function() {
                        if (User.getUser() == null) {
                            // user is not logged, do not proceed
                            // instead, go to a different page
                            $location.path('/');
                            deferred.reject();
                        } else {
                            // everything is fine, proceed
                            deferred.resolve();
                        }
                    });

                    return deferred.promise;
                }
            }
        })
        .when("/find_book", {
            templateUrl: "pages/find_book/find_book.html",
            controller: "find_bookCtrl"
        })
        .when("/followers", {
            templateUrl: "pages/followers/followers.html",
            controller: "followersCtrl",
            resolve: {
                auth: function(User, $q, $timeout,$location) {
                    var deferred = $q.defer();
                    $timeout(function() {
                        if (User.getUser() == null) {
                            // user is not logged, do not proceed
                            // instead, go to a different page
                            $location.path('/');
                            deferred.reject();
                        } else {
                            // everything is fine, proceed
                            deferred.resolve();
                        }
                    });

                    return deferred.promise;
                }
            },
            resolve: {
                auth: function(User, $q, $timeout,$location) {
                    var deferred = $q.defer();
                    $timeout(function() {
                        if (User.getUser() == null) {
                            // user is not logged, do not proceed
                            // instead, go to a different page
                            $location.path('/');
                            deferred.reject();
                        } else {
                            // everything is fine, proceed
                            deferred.resolve();
                        }
                    });

                    return deferred.promise;
                }
            }
        })
        .when("/following", {
            templateUrl: "pages/following/following.html",
            controller: "followingCtrl",
            resolve: {
                auth: function(User, $q, $timeout,$location) {
                    var deferred = $q.defer();
                    $timeout(function() {
                        if (User.getUser() == null) {
                            // user is not logged, do not proceed
                            // instead, go to a different page
                            $location.path('/');
                            deferred.reject();
                        } else {
                            // everything is fine, proceed
                            deferred.resolve();
                        }
                    });

                    return deferred.promise;
                }
            }
        })
        .when("/chat", {
            templateUrl: "pages/chat/chat.html",
            controller: "chatCtrl",
            resolve: {
                auth: function(User, $q, $timeout,$location) {
                    var deferred = $q.defer();
                    $timeout(function() {
                        if (User.getUser() == null) {
                            // user is not logged, do not proceed
                            // instead, go to a different page
                            $location.path('/');
                            deferred.reject();
                        } else {
                            // everything is fine, proceed
                            deferred.resolve();
                        }
                    });

                    return deferred.promise;
                }
            }
        })
        .otherwise({
            redirectTo: '/'
        });



    $locationProvider.html5Mode(true);
});

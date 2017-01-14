angular.module("myApp").controller("followingCtrl", function($scope, $http) {
    $scope.following = [];

    $scope.getFollowing = function() {
        $http({
            method: 'POST',
            url: '/node_following'
        }).then(function successCallback(response) {
            if (response.data.status == "2") {
                $scope.following = response.data.data;
                console.log($scope.following)

            } else {
                $scope.followers = []
            }
        }, function errorCallback(response) {
            $scope.followers = []
            alert("Something Unexpected happened. Please try again")
        });
    }
    
    $scope.getFollowing();
});

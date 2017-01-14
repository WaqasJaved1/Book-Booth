angular.module("myApp").controller("followersCtrl", function($scope, $http) {
    $scope.followers = [];

    $scope.getFollowers = function() {
        $http({
            method: 'POST',
            url: '/node_followers'
        }).then(function successCallback(response) {
            if (response.data.status == "2") {
                $scope.followers = response.data.data;
                console.log($scope.peoples)

            } else {
                $scope.followers = []
            }
        }, function errorCallback(response) {
            $scope.followers = []
            alert("Something Unexpected happened. Please try again")
        });
    }

    $scope.getFollowers();
});

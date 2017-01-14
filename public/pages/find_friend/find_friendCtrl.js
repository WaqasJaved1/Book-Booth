angular.module("myApp").controller("find_friendCtrl", function($scope, $http) {

    $scope.peoples = [];

    $scope.search_people = function(data) {
        console.log("HAHAH")
        if (!$scope.search_form.$invalid) {
            $http({
                method: 'POST',
                url: '/node_peoples',
                data: data
            }).then(function successCallback(response) {
                // $("#myModalSignIn").modal("hide")

                if (response.data.status == "2") {
                    $scope.peoples = response.data.data;
                    console.log($scope.peoples)

                } else {
                    $scope.peoples = []
                }
            }, function errorCallback(response) {
                $scope.peoples = []
                alert("Something Unexpected happened. Please try again")
            });
        }
    }

    $scope.follow = function(data) {
        console.log(data);
        $http({
            method: 'POST',
            url: '/node_follow',
            data: {'email':data}
        }).then(function successCallback(response) {
            // $("#myModalSignIn").modal("hide")

            if (response.data.status == "2") {
                alert("Followed Success");
                console.log($scope.peoples)
                $.each($scope.peoples, function(i) {
                    if ($scope.peoples[i].email === data) {
                        $scope.peoples.splice(i, 1);
                        return false;
                    }
                });

            } else {
                alert("Something Unexpected happened. Please try again");
            }
        }, function errorCallback(response) {
            alert("Something Unexpected happened. Please try again")
        });
    }
});

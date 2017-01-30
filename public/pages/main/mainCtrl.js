angular.module("myApp").controller("mainCtrl", function($scope, $http) {

	$scope.main_books = [];
    $http({
        method: 'POST',
        url: '/node_search_books',
        data: null
    }).then(function successCallback(response) {
        if (response.data.status == "2") {
            $scope.main_books = response.data.data;
        } else {
        }
    }, function errorCallback(response) {
        alert("Something Unexpected happened. Please try again")
    });
});

angular.module("myApp").controller("find_bookCtrl", function ($scope,$http) {

	$scope.books = [];
	$scope.details = {}

	$scope.book_details = function(data){
		$scope.details = data;		
	}

	$scope.search_books = function(data){

		if(data == null){
			$http({
                method: 'POST',
                url: '/node_search_books',
                data: data
            }).then(function successCallback(response) {
                // $("#myModalSignIn").modal("hide")

                if (response.data.status == "2") {
                   $scope.books = response.data.data;
                	console.log($scope.books)

                } else {
                    $scope.books = []
                }
            }, function errorCallback(response) {
            	$scope.books = []
               	alert("Something Unexpected happened. Please try again")
            });
		}

		if(!$scope.search_form.$invalid){
    		$http({
                method: 'POST',
                url: '/node_search_books',
                data: data
            }).then(function successCallback(response) {
                // $("#myModalSignIn").modal("hide")

                if (response.data.status == "2") {
                   $scope.books = response.data.data;
                	console.log($scope.books)

                } else {
                    $scope.books = []
                }
            }, function errorCallback(response) {
            	$scope.books = []
               	alert("Something Unexpected happened. Please try again")
            });
    	}
	}
})
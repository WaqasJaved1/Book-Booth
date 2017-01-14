angular.module("myApp").controller("sellCtrl", function($scope, $http) {

    $scope.books = []

    refreshBooks = function() {
        $http({
            method: 'POST',
            url: '/node_user_books'
        }).then(function successCallback(response) {

            if (response.data.status == "2") {
                $scope.books = response.data.data
            } else {
                $scope.books = [];
            	console.log(response);

            }
        }, function errorCallback(response) {
            $scope.books = [];
            console.log(response)
            alert("Something Unexpected happened. Please try again")

        });
    }

    refreshBooks();


    $scope.sold  =function(data){
        $http({
            method: 'POST',
            url: '/node_sold',
            data:{'id':data.target.id}
        }).then(function successCallback(response) {

            if (response.data.status == "2") {
                refreshBooks();
            } else {
                console.log(response)
                alert("Something Unexpected happened. Please try again")
            }
        }, function errorCallback(response) {
            console.log(response)
            alert("Something Unexpected happened. Please try again")

        });
    }
    $scope.add_book = function(data) {

        console.log(data);
        console.log($scope.add_new_book_form);

        if (!$scope.add_new_book_form.$invalid) {
            $("#myModalNewBook").modal("hide");

            $http({
                method: 'POST',
                url: '/node_add_book',
                contentType: 'multipart/form-data',
                data: data
            }).then(function successCallback(response) {

                if (response.data.status == "2") {
                    $scope.new_book = {}
                    setTimeout(refreshBooks(), 500);
                    alert("Added Successfully");
                } else {
            		console.log(response);

                    alert("Something Unexpected happened. Please try again");
                    $("#myModalNewBook").modal("show");
                }
            }, function errorCallback(response) {
            	console.log(response);
                alert("Something Unexpected happened. Please try again")
                $("#myModalNewBook").modal("show");

            });
        }
    }

});

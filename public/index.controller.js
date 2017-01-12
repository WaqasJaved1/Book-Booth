var app = angular.module('myApp', ["ngRoute"]);

app.controller('myCtrl', function($scope, $http, User) {

    initialize = function() {
      $scope.error_username = false;
      $scope.error_other = false;
      $scope.alert_success = false;
    }

    $scope.user = function(){return User.getUser();}
    $scope.logged = function(){return User.Logged();}

    initialize();

    $scope.login = function(data) {
        initialize();
        if (!$scope.sign_in_form.$invalid) {
            $http({
                method: 'POST',
                url: '/node_login',
                data: data
            }).then(function successCallback(response) {
                // $("#myModalSignIn").modal("hide")
                console.log(response.data)

                if (response.data.status == "2") {
                    $scope.alert_success = true;
                    User.setUser(response.data.data[0]);

                    setTimeout(function() {$("#myModalSignIn").modal("hide")}, 1000);
                } else {
                    $scope.error_username = true;
                }
            }, function errorCallback(response) {
                $scope.error_other = true;
            });
        }
    }

    $scope.register = function(data) {
        initialize();
        if (!$scope.sign_up_form.$invalid) {
            $http({
                method: 'POST',
                url: '/node_register',
                data: data
            }).then(function successCallback(response) {
                // $("#myModalSignIn").modal("hide")
                console.log(response.data)
                if (response.data.status == "2") {

                    $scope.alert_success = true;
                } else if(response.data.status == "1"){
                    $scope.error_username = true;
                }else{
                    $scope.error_other = true;
                }
            }, function errorCallback(response) {
                $scope.error_other = true;
            });
        }
    }

    $scope.logout = function(){
        initialize();"ngRoute"
        User.logout();
    }




});

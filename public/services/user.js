angular.module('myApp').service('User', function($location, $http) {
    user = null;
    logged = false;

    this.setUser = function(x) {
        user = x;
        logged = true;
    }

    this.getUser = function() {
        return user;
    }

    this.logout = function() {
        user = null;
        logged = false;
        $http({
            method: 'GET',
            url: '/node_logout'
        }).then(function successCallback(response) {
            $location.path( "/main" );

        }, function errorCallback(response) {
            console.log(response.data)
        });
    }

    this.Logged = function() {
        return logged;
    }

    this.name = function() {
        return user.first_name + " " + user.last_name;
    }

    this.getProfileData = function() {
        $http({
            method: 'GET',
            url: '/node_logged_user'
        }).then(function successCallback(response) {
            console.log(response)
            if(response.data.status == "2"){
                // User.setUser(response.data.data[0]);
                user = response.data.data[0];
                logged = true;
            }
        }, function errorCallback(response) {
            alert("Something Unexpected has happened")
        });
    }

    this.uploadProfilePicture = function(data){
        $http({
            method: 'POST',
            url: '/node_upload_photo',
            enctype:"multipart/form-data"
        }).then(function successCallback(response) {
            console.log(response)
            if(response.data.status == "2"){
                // User.setUser(response.data.data[0]);
                user = response.data.data[0];
                logged = true;
            }
        }, function errorCallback(response) {
            alert("Something Unexpected has happened")
        });
    }

    this.isFriend = function(){
        return window.location.href;
    }
});

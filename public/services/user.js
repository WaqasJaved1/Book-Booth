angular.module('myApp').service('User', function() {
	user = null;
	logged =false;

    this.setUser = function (x) {
        user = x;
        logged = true;
    }

    this.getUser = function(){
    	return user;
    }

    this.logout = function(){
    	user = null;
    	logged = false;
    }

    this.Logged = function(){
    	return logged;
    }

    this.name = function(){
    	return user.first_name + " " + user.last_name;
    }
});
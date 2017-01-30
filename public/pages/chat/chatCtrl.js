angular.module("myApp").controller("chatCtrl", function($scope, $http, Chat, User) {
    $scope.selected = null;
    Chat.Messages();


    $scope.select = function(data) {
        $scope.selected = data;
    }

    $scope.messages = function() {
        return Chat.getMessages();
    }

    $scope.contacts = function() {
        return Chat.getContacts(User.getUser().email);
    }

    $scope.filterS = function(data) {
        return data.email0 === $scope.selected ||
            data.email1 === $scope.selected
    };

    $scope.checkClass = function(data){
    	if(data.email0 == User.getUser().email){
    		return "base_sent"
    	}else{
    		return "base_receive";
    	}
    }

    $scope.checkClassM = function(data){
    	if(data.email0 == User.getUser().email){
    		return "msg_sent"
    	}else{
    		return "msg_receive";
    	}
    }

    $scope.send_message = function(email, data){
    	Chat.sendMessage(email, data);
    	$scope.msg = "";
    }

    console.log("Hello", $scope.contacts())

})

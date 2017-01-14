angular.module('myApp').service('Chat', function( $http) {

    messages = []

    this.getMessages = function(){
        return messages;
    }

    this.Messages = function(){
        $http({
            method: 'POST',
            url: '/node_get_messages'
        }).then(function successCallback(response) {
            if (response.data.status == "2") {
                messages = response.data.data;

            } else {
                messages = []

            }
        }, function errorCallback(response) {
                messages = []

        });
    }
    
    this.sendMessage = function(email, message) {
        $http({
            method: 'POST',
            url: '/node_send_message'
        }).then(function successCallback(response) {
            if (response.data.status == "2") {
                return true;

            } else {
                return false;
            }
        }, function errorCallback(response) {
            return false;
        });
    }

});

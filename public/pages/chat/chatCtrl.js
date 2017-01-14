angular.module("myApp").controller("chatCtrl", function ($scope,$http,Chat) {

    $scope.messages = function(){
        return Chat.getMessages();
    }

    run = function(){
        while(true){
            setTimeout(Chat.Messages, 3000);
            console.log();
        }
    }
    run();

})
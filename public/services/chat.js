angular.module('myApp').service('Chat', function($http) {
    Array.prototype.remove = function() {
        var what, a = arguments,
            L = a.length,
            ax;
        while (L && this.length) {
            what = a[--L];
            while ((ax = this.indexOf(what)) !== -1) {
                this.splice(ax, 1);
            }
        }
        return this;
    };

    

    messages = []
    distinct = []

    this.getMessages = function() {
        return messages;
    }

    this.getContacts = function(data) {
        distinct.remove(data);
        return distinct;
    }

    this.Messages = function() {
        $http({
            method: 'POST',
            url: '/node_get_messages'
        }).then(function successCallback(response) {
            if (response.data.status == "2") {

                messages = response.data.data;
                var unique = {};
                distinct = [];
                for (var i in messages) {
                    if (typeof(unique[messages[i].email0]) == "undefined") {
                        distinct.push(messages[i].email0);
                    }
                    if (typeof(unique[messages[i].email1]) == "undefined") {
                        distinct.push(messages[i].email1);
                    }
                    unique[messages[i].email0] = 0;
                    unique[messages[i].email1] = 0;
                    distinct.remove(undefined);
                }
                // console.log(messages);
                // console.log(distinct);


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
            url: '/node_send_message',
            data: {'email': email, 'message': message}
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

    update = function(m){
        m();
        setTimeout(function(){update(m)}, 3000);
    }

    update(this.Messages);

    
});

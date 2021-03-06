/*global Firebase*/
'use strict';

angular.module('firebaseAppApp')
  .controller('MainCtrl', function ($scope, $timeout) {
    var rootRef = new Firebase('https://hopcity.firebaseio.com/');
    var messagesRef = rootRef.child('messages');

    $scope.currentUser = null;
    $scope.currentText = null;

    $scope.messages = [];

    $scope.currentAnimal = 'Giraffe';

    // on() is a listener for changes to the ref
    messagesRef.on('child_added', function(snapshot, prevChild) {
      // $timeout value is 0, top of queue, telling angular to update
      $timeout(function() {
        var snapshotVal = snapshot.val();
        $scope.messages.push(snapshotVal);
      });
      console.log("previous child: " + prevChild);
    });

    $scope.sendMessage = function() {
      var newMessage = {
        user: $scope.currentUser,
        text: $scope.currentText
      };
      // push created a child node on the
      // messages node and also creates a 
      // unique name
      messagesRef.push(newMessage);
    };

    $scope.createAnimal = function() {
    	var newAnimal = {
    		name: $scope.currentAnimal
    	};
    	rootRef.child('animals').push(newAnimal);
    };

    // // using $watch bc {{message.text}} isn't in view
    // $scope.$watch('message.text', function(newVal) {
    //   console.log("$watch newVal: " + newVal);
    //   if (!newVal) {
    //     return;
    //   }
    //   childRef.update({
    //     text: newVal
    //   });
    // });

    // $scope.setMessage = function() {
    // 	childRef.set({
    // 		user: "Jamie",
    // 		text: "sack"
    // 	});
    // }

    // $scope.updateMessage = function() {
    //   childRef.update({
    //     text: "Slinky sack"
    //   });
    // }

    // $scope.deleteMessage = function() {
    //   childRef.remove();
    // }
  });

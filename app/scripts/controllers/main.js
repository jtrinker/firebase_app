/*global Firebase*/
'use strict';

/**
 * @ngdoc function
 * @name firebaseAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the firebaseAppApp
 */
angular.module('firebaseAppApp')
  .controller('MainCtrl', function ($scope) {
    var rootRef = new Firebase('https://hopcity.firebaseio.com/');

    $scope.setMessage = function() {
    	rootRef.child('message').set({
    		user: "Jamie",
    		text: "Hi"
    	});
    }
  });

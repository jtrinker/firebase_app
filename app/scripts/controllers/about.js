'use strict';

/**
 * @ngdoc function
 * @name firebaseAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the firebaseAppApp
 */
angular.module('firebaseAppApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

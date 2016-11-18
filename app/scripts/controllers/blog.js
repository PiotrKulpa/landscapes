'use strict';

/**
 * @ngdoc function
 * @name landscapesApp.controller:BlogCtrl
 * @description
 * # BlogCtrl
 * Controller of the landscapesApp
 */
angular.module('landscapesApp')
  .controller('BlogCtrl', function ($scope, $http) {
    $http.get('/scripts/data.json').then(function(response){
      $scope.news = response.data.records;
    }, function(response){
      $scope.err = 'Sorry, cant load data';
    });

  });

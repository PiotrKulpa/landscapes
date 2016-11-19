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
      var myDataCount = $scope.news.length;
       var paginationIndex = Math.ceil(myDataCount / 10);

       $scope.paginationData = [];
       var i =0;
       for(i=0; i<paginationIndex; i++){
         $scope.paginationData.push(i);
       };
    }, function(response){
      $scope.err = 'Sorry, cant load data';
    });
      $scope.n = 0;
      $scope.paginationRange = function(pageNumber) {
      $scope.n = pageNumber * 10;
      };

  });

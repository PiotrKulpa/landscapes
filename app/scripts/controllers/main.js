'use strict';

/**
 * @ngdoc function
 * @name landscapesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the landscapesApp
 */
angular.module('landscapesApp')
  .controller('MainCtrl', ['$scope','$http','$location', '$window', '$sanitize', function ($scope, $http, $location, $window, $sanitize) {
    
	$scope.closeSubsc = function(){
		document.getElementById('newsletter').style.display = 'none';
	};

    $scope.master = {};
     $scope.sendEmailNews = function(customer, sendNewsletter) 
    {
    
      //sanitize function before POST data
    $scope.customer.emailNewsletter = $sanitize($scope.customer.emailNewsletter);
    
    
    //POST
      $http({
          method: 'POST',
          url: '/api/newsletter',
          data: customer,
          headers: {'Content-Type': 'application/json'}
      }).then(function successCallback(response) {
        //$window.location = '';
        $scope.reset();
        document.getElementById('newsletter').style.display = 'none';


      }, function errorCallback(response) {
        //$scope.msg = 'Something went wrong when adding! Try again!';
        //$scope.msgcss = 'alert alert-danger';
        $scope.testresp = response;

        
        
      });
        
      $scope.reset = function() {
        $scope.customer = angular.copy($scope.master);
      };
      console.log($scope.customer);
      $scope.reset();

  };
	
  }])
  .directive('displayNewsletter', function($timeout){
  	$timeout(function () {
        document.getElementById('newsletter').style.display = 'block';
        //angular.element('#newsletter').css('display', 'block');
    }, 2000);
  });

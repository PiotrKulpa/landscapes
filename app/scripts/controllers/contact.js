'use strict';

/**
 * @ngdoc function
 * @name landscapesApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the landscapesApp
 */
angular.module('landscapesApp')
  .controller('ContactCtrl',['$scope','$http','$location', '$window', '$sanitize', function ($scope, $http, $location, $window, $sanitize) {

     $scope.master = {};
  	 $scope.sendEmail = function(customer, sendMessage)
	  {
	  	//sanitize function before POST data
		$scope.customer.Email = $sanitize($scope.customer.Email);
		$scope.customer.Msg = $sanitize($scope.customer.Msg);

		//POST
			$http({
				  method: 'POST',
				  url: '/api/contact',
				  data: customer,
				  headers: {'Content-Type': 'application/json'}
			}).then(function successCallback(response) {
				//$window.location = '';
				$scope.reset();

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



  }]);

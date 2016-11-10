'use strict';

/**
 * @ngdoc function
 * @name landscapesApp.controller:InfoCtrl
 * @description
 * # InfoCtrl
 * Controller of the landscapesApp
 */
angular.module('landscapesApp')
  .controller('InfoCtrl', function ($scope){
    
	
	$scope.loadImages = function(){

		var loadImagesObj = {
		incr: 2,
		scr: 350,
		scrollImage: function(){
			console.log(this.incr);

			if (document.body.scrollTop > this.scr || document.documentElement.scrollTop > 	this.scr) { document.images[this.incr].className = 'slideUp';
				this.incr++;
				this.scr = this.scr + 300;		
			}
		}
		
		
		
	};
	
	window.onscroll = function(){loadImagesObj.scrollImage();};
		
		};
  });

  
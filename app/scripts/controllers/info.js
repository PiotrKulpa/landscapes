'use strict';

/**
 * @ngdoc function
 * @name landscapesApp.controller:InfoCtrl
 * @description
 * # InfoCtrl
 * Controller of the landscapesApp
 */
angular.module('landscapesApp')
  .controller('InfoCtrl', function ($scope, Imgslider){
  $scope.loadImages = function(){
    Imgslider.startSlider();
    };




  })
  //factory for not overloading controlles
  .factory('Imgslider', function($log){



  		var loadImagesObj = {
  		    incr: 2,
  		    scr: 350,
  		    scrollImage: function(){
      			if (document.body.scrollTop > this.scr || document.documentElement.scrollTop > 	this.scr) { document.images[this.incr].className = 'slideUp';
      				this.incr++;
      				this.scr = this.scr + 300;
              $log.info(this.scr);
      			}
  		    }
  	  };

      return{
        startSlider: function(){
          window.onscroll = function(){loadImagesObj.scrollImage();};
        }

      };





  });

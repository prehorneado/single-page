'use strict';
angular.module('myApp')
	.controller('HomeCtrl', function ($scope) {
		$scope.goToSection1 = function(){
			$('html, body').animate({
		        scrollTop: $("#section-1").offset().top - 60
		    }, 400);
		}
		$scope.goToSection2 = function(){
			$('html, body').animate({
		        scrollTop: $("#section-2").offset().top - 60
		    }, 400);
		}
		$scope.goToSection3 = function(){
			$('html, body').animate({
		        scrollTop: $("#section-3").offset().top - 60
		    }, 400);
		}
		$scope.goToSection4 = function(){
			$('html, body').animate({
		        scrollTop: $("#section-4").offset().top - 60
		    }, 400);
		}

	});


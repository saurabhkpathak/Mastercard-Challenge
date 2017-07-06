'use strict';

/**
 * @ngdoc function
 * @name fruitShopApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the fruitShopApp
 */
angular.module('fruitShopApp')
  .controller('MainCtrl', ['fruitsFactory', '$scope', function (fruitsFactory, $scope) {
    fruitsFactory.getFruits().then(function(response) {
        $scope.fruits = response.products;
        $scope.currency = response.currency;
      }, function(error) {
        console.log(error);
      });
  }]);

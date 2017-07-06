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

      $scope.placeOrder = function() {
        var order = $scope.fruits.filter(function (fruit) {
          return (fruit.quantity > 0);
        });
        order = {
          "amountCharged": 100,
          "orderItems": [
            {
              "productId": 500,
              "quantity": 3
            }
          ],
          "statusCode": 200
        };
        fruitsFactory.placeOrder(order).then(function(response) {
          alert(response);
        }, function(error) {
          console.log(error);
        });
      };
  }]);

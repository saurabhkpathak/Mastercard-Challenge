'use strict';

/**
 * @ngdoc function
 * @name fruitShopApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the fruitShopApp
 */
angular.module('fruitShopApp')
  .controller('MainCtrl', ['fruitsFactory', '$scope', '$log', '$window', function (fruitsFactory, $scope, $log, $window) {
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
        var orderData = {
          'amountCharged': 0,
          'orderItems': [],
          'statusCode': 200
        };
        order.forEach(function(fruit) {
          orderData.orderItems.push({
              'productId': fruit.id,
              'quantity': fruit.quantity
            });
            orderData.amountCharged += fruit.price*fruit.quantity;
        }, this);
        fruitsFactory.placeOrder(orderData).then(function() {
          $window.alert('Purchase Succesful. Total amount charged is ' + orderData.amountCharged + $scope.currency);
        }, function(error) {
          $log.debug(error);
        });
      };
  }]);

'use strict';

/**
 * @ngdoc service
 * @name fruitShopApp.apiUrl
 * @description
 * # apiUrl
 * Constant in the fruitShopApp.
 */
angular.module('fruitShopApp')
  .constant('apiUrl', {
    'getFruits': 'https://3xxm1ijwxe.execute-api.eu-west-1.amazonaws.com/test/products',
    'placeOrder': ''
  });

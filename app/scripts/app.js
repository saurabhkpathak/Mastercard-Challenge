'use strict';

/**
 * @ngdoc overview
 * @name fruitShopApp
 * @description
 * # fruitShopApp
 *
 * Main module of the application.
 */
angular
  .module('fruitShopApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

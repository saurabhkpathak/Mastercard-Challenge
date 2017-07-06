'use strict';

/**
 * @ngdoc service
 * @name fruitShopApp.fruitsFactory
 * @description
 * # fruitsFactory
 * Factory in the fruitShopApp.
 */
angular.module('fruitShopApp')
  .factory('fruitsFactory', ['$q', '$http', 'apiUrl', function ($q, $http, apiUrl) {
    // Service logic

    // Public API here
    return {
      getFruits: function () {
        var deferred = $q.defer();
            $http.get(apiUrl.getFruits)
                .then(function(response) {
                    deferred.resolve(response.data);
                }, function(error) {
                    deferred.reject(error);
                });
            return deferred.promise;
      }
    };
  }]);

'use strict';

/**
 * @ngdoc function
 * @name hiqApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hiqApp
 */
angular.module('hiqApp')
  .controller('rootCtrl', function ($scope, getUserService) {
    getUserService.getUser().$promise.then(function(response) {
      $scope.userName = response.userName;
    });

    console.log('Root state');
  });

'use strict';

/**
 * @ngdoc overview
 * @name hiqApp
 * @description
 * # hiqApp
 *
 * Main module of the application.
 */
angular
  .module('hiqApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ui.router',
    'ui.bootstrap'
  ])
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/root/zip');

    $stateProvider
      .state('root', {
        url: '/root',
        templateUrl: 'views/root.html',
        controller: 'rootCtrl',
        abstract: true
      })
      .state('root.zip', {
        url: '/zip',
        templateUrl: 'views/zip.html',
        controller: 'zipCtrl'
      })
      .state('root.address', {
        url: '/address',
        templateUrl: 'views/address.html',
        controller: 'addressCtrl'
      });
  });

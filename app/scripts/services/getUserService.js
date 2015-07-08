'use strict';

angular.module('hiqApp')
  .factory('getUserService', function($resource) {
    return $resource('/api/getuser', {}, {
      getUser: {method: 'GET'}
    });
  });

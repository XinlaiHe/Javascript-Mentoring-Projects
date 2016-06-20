(function () {

  'use strict';
  angular.module("App").factory("PhotoService", ['$resource', function($resource){

        return $resource('api/photo', null ,{get : {method : 'GET', isArray : true}});

  }]);

})();
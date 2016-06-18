(function() {
  'use strict';

  angular
  .module('App')
  .controller('HomeController', HomeController);

  HomeController.$inject = ['$scope', '$http', '$cookieStore'];

  function HomeController($scope, $http, $cookieStore) {

    if($cookieStore.get("user")){
      $scope.auth = $cookieStore.get("user");
    }else{
      $scope.auth = false;
    }

    $scope.logout = function(){
      $cookieStore.remove("user");
      $scope.auth = $cookieStore.get("user");
    }
  }


})();

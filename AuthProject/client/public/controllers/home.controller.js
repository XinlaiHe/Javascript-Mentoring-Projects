(function() {
  'use strict';

  angular
  .module('App')
  .controller('HomeController', HomeController);

  HomeController.$inject = ['$scope', '$http','$window', 'UserService'];

  function HomeController($scope, $http, $window, UserService) {

    if(UserService.getUser()){
      $scope.auth = UserService.getUser();
    }else{
      $scope.auth = false;
    }

    $scope.logout = function(){
      UserService.clear();
      $scope.auth = UserService.getUser();
    }
  }


})();

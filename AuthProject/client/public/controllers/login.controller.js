(function() {
  'use strict';

  angular
  .module('App')
  .controller('LoginController', LoginController);

  LoginController.$inject = ['$scope', '$http','$window', 'UserService', '$location'];

  function LoginController($scope, $http, $window, UserService, $location) {


    $scope.username = '';
    $scope.password = '';
    $scope.login = login;

    function login(){

      $http({
          method: 'POST',
          url: 'http://localhost:8000/users/login',
          data: { username : $scope.username, password : $scope.password }
        }).then(function successCallback(response) {

          UserService.setUser(response.data);
          // $window.location.href = '/';
          $location.path('/', false);

        }, function errorCallback(response) {


          console.log("login failed");

        });

    }
 }

})();

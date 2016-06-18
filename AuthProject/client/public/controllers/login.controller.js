(function() {
  'use strict';

  angular
  .module('App')
  .controller('LoginController', LoginController);

  LoginController.$inject = ['$scope', '$http', '$cookieStore', '$location'];

  function LoginController($scope, $http, $cookieStore, $location) {


    $scope.username = '';
    $scope.password = '';
    $scope.login = login;

    function login(){

      $http({
          method: 'POST',
          url: 'http://localhost:8000/users/login',
          data: { username : $scope.username, password : $scope.password }
        }).then(function successCallback(response) {

          $cookieStore.put("user", response.data);
          $location.path('/', false);

        }, function errorCallback(response) {

          console.log("login failed");

        });

    }
 }

})();

(function() {
  'use strict';

  angular
  .module('App')
  .controller('RegisterController', RegisterController);

  RegisterController.$inject = ['$scope', '$http','$window'];

  function RegisterController($scope, $http, $window) {


    $scope.username = '';
    $scope.password = '';
    $scope.login = login;

    function login(){

      $http({
          method: 'POST',
          url: 'localhost:8000/users/login',
          data: { username : $scope.username, password : $scope.password }
        }).then(function successCallback(response) {

          $window.user = response;
          $window.location.href =  '/';

        }, function errorCallback(response) {


          console.log("login failed");

        });

    }
 }

})();

(function() {
  'use strict';

  angular
  .module('App')
  .controller('RegisterController', RegisterController);

  RegisterController.$inject = ['$scope', '$http', '$location', '$cookieStore'];

  function RegisterController($scope, $http, $location, $cookieStore) {


    $scope.username = '';
    $scope.password = '';
    $scope.register = register;

    function register(){

      $http({
          method: 'POST',
          url: 'http://localhost:8000/users/register',
          data: { username : $scope.username, password : $scope.password }
        }).then(function successCallback(response) {
          
          if(response.data.code && response.data.code == 11000){

            $scope.error = "Username already exists";

          }else{

            $cookieStore.put("user", response.data);
            $location.path('/', false);
          }

        }, function errorCallback(response) {


          console.log("register failed");

        });

    }
 }

})();

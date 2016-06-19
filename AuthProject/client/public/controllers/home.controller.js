(function() {
  'use strict';

  angular
  .module('App')
  .controller('HomeController', HomeController);

  HomeController.$inject = ['$scope', '$http', '$cookieStore'];

  function HomeController($scope, $http, $cookieStore) {
    $scope.file = undefined;
    
    $scope.upload = function(){
      var files = document.querySelector("input").files;
      var reader = new FileReader();
      reader.readAsDataURL(files[0]);    
      reader.onload = function() {  
          var img = this.result;
          var name = files[0].name;
          var user = $cookieStore.get("user");
          $http({
            method: 'POST',
            url: 'http://localhost:9999/api/photo',
            data: { img : img, name : name, user : user }
          }).then(function successCallback(response) {
            
            console.log("image upload succeeded");

          }, function errorCallback(response) {


            console.log("image upload failed");

        });
      }; 
    }

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

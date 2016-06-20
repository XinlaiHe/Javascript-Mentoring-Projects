(function(){
  'use strict';

  angular
  .module('App')
  .controller('HomeController', HomeController);

  HomeController.$inject = ['$scope', "photoResolve", "$http", '$window'];

  function HomeController($scope, photoResolve, $http, $window) {

    $scope.photo = photoResolve;
    $scope.pho = undefined;

    $scope.upload = function(){
      var files = document.getElementById("file").files;
      var file = files[0];
      if(file && (file.type == 'image/jpg' || "image/jpeg" || "image/png") && file.size <= 2097152){
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function() {
            var img = this.result;
            var name = file.name;
            var user = "System";
            $http({
              method: 'POST',
              url: 'http://localhost:9999/api/photo',
              data: { img : img, name : name, user : user }
            }).then(function successCallback(response) {

              $window.location.reload();
              console.log("image upload succeeded");

            }, function errorCallback(response) {


              console.log("image upload failed");

            });
        }
      }
    }
    $scope.display = function(){

      document.getElementById("img").src = $scope.pho.img;
    }
  }
})()

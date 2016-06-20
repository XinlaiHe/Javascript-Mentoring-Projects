angular.module('App', ['ngRoute', 'ngResource']);

angular.
  module('App').
  config(['$routeProvider',
    function config($routeProvider) {

      $routeProvider.
        when('/', {
          templateUrl: './public/views/home.html',
          controller: "HomeController",
          resolve: {
              photoResolve : function(PhotoService){

                return PhotoService.get().$promise;

              }
          }
        })
        .otherwise({redirectTo : "/"});
    }
  ]);



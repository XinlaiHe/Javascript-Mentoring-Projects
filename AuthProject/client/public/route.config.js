angular.module('App', ['ngRoute']);

angular.
  module('App').
  config(['$routeProvider',
    function config($routeProvider) {

      $routeProvider.
        when('/', {
          templateUrl: './public/views/home.html',
          controller: "HomeController"
        }).
        when('/login', {
          templateUrl: './public/views/login.html',
          controller: "LoginController"
        }).
        when('/register', {
          templateUrl: './public/views/register.html',
          controller: "RegisterController"
        })
        .otherwise('/error');
    }
  ]);



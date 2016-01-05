'use strict';

// Declare app level module which depends on views, and components
angular.module('tandem', [
  'ngRoute',
  'user',
  'login' ,
  'home',
  'main',
  'LocalStorageModule',
  'directives'
]).
config(['$routeProvider','$httpProvider', function($routeProvider,$httpProvider) {
  $routeProvider.otherwise({redirectTo: '/home'});
  
  $httpProvider.interceptors.push('sessionService');
  
}]);

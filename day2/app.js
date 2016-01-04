'use strict';

// Declare app level module which depends on views, and components
angular.module('day2simple', [
  'ngRoute',
  'ui.router'
])
//.config(['$routeProvider', function($routeProvider) {
//        $routeProvider.when('/contacts-list', {
//    templateUrl: 'list.html',
//    controller: 'contactCtrl'
//  })
//  .when('/contacts-view', {
//    templateUrl: 'view.html',
//    controller: 'contactViewCtrl'
//  })
//  .when('/contacts-add', {
//    templateUrl: 'add.html',
//    controller: 'contactAddCtrl'
//  });
//  $routeProvider.otherwise({redirectTo: '/contacts-add'});
//  
//}])

.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/contact");
  //
  // Now set up the states
  $stateProvider
    
    .state('list', {
        
      url: "/list",
      templateUrl: "list.html",
      controller: function($scope) {
        $scope.message = 'contact list';
        $scope.parent = 'parent data';
      }
    })
    .state('list.view', {
      url: "/view",
      templateUrl: "view.html",
      controller: function($scope) {
        $scope.message = 'contact list view';
      }
    })
    .state('add', {
      url: "/add",
      templateUrl: "add.html",
      controller: function($scope) {
         $scope.message = 'Add new contact';
      }
    })
    .state('contact', {
      url: "/contacts",
      templateUrl: "contacts.html",
      
    })
})
//
//.controller('contactViewCtrl', function($scope) {
//     
//    $scope.message = 'view contact';
//     
//})
//.controller('contactAddCtrl', function($scope) {
//     
//    $scope.message = 'Add new contact';
//     
//})
//.controller('contactCtrl', function($scope) {
// 
//    $scope.message = 'contact list';
// 
//});



;

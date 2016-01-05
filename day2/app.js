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
         $scope.Mukul = {};
            $scope.Mukul.name = "Mukul Medatwal";
            $scope.Mukul.rollno  = 1;

            $scope.Piyush = {};
            $scope.Piyush.name = "Piyush Medatwal";
            $scope.Piyush.rollno  = 2;
            
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
      controller: function($scope , contactNameByService , contactNameByFactory) {
            $scope.message = 'Add new contact';
            
            //from Service
            $scope.serviceName = contactNameByService.setName("Mukul Medatwal");
 
            //from Factory
            contactNameByFactory.setName("Mukul Medatwal");
            $scope.factoryName = contactNameByFactory.name;
 
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

//defining service
 .service('contactNameByService', function () {
    this.name = '';
    this.setName = function (newName) {
    this.name = newName;
    return this.name;
 };
 })
 
 //defining service
 .factory('contactNameByFactory', function () {
     var myfactory = {};
    myfactory.name = '';
    myfactory.setName = function (newName) {
    myfactory.name = newName;
   
    };
    return myfactory;
 })
 
        .directive('student', function() {
    var directive = {};
    directive.restrict = 'E';
    directive.template = "Student: <b>{{student.name}}</b> , Roll No: <b>{{student.rollno}}</b>";

    directive.scope = {
       student : "=name"
    }

    directive.compile = function(element, attributes) {
       element.css("border", "1px solid #cccccc");

       var linkFunction = function($scope, element, attributes) {
          element.html("Student: <b>"+$scope.student.name +"</b> , Roll No: <b>"+$scope.student.rollno+"</b><br/>");
          element.css("background-color", "#ff00ff");
       }
       return linkFunction;
    }

    return directive;
    })
         


;

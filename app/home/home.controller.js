angular.module('home.controller',['services'])
      .controller('homeCtrl',['$scope','loginService' ,'employeesService','$location',homeController]);

function homeController($scope,loginService,employeesService,$location) {
    if(loginService.getSession()) {
        $scope.email = loginService.getSession().email;
        $scope.user = employeesService.getUser($scope.email);
        $scope.logout = function () {
            loginService.logout();
            $location.path('/login');
        }
    } else {
        $location.path('/');
    }
//    console.log($scope.user);
};
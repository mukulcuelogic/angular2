angular.module('home.controller',['services'])
      .controller('homeCtrl',['$scope','loginService' ,'employeesService','$location','$rootScope',homeController])
      .controller('editCtrl',['$scope','loginService' ,'employeesService','$location','$routeParams',editController])
        .controller('addCtrl',['$scope','loginService' ,'employeesService','$location','$routeParams',addCtrl]);

function homeController($scope,loginService,employeesService,$location,$rootScope) {
        $scope.selectedRow = [];
        $scope.email = loginService.getSession().email;
        $scope.user = employeesService.getUser($scope.email);
        $scope.employees = employeesService.employees;
        $scope.sortorder = '+fullName';
        $scope.deleteEmployee = function(employeeId) {
                $scope.employees = employeesService.deleteUser($scope.employees , employeeId);
                $location.path('/home');
        };
        $scope.openEdit = function(employeeId) {
                
                $location.path('/home/'+employeeId);
        };
        $scope.selectEmployee = function(employee) {
//                $scope.selectedRow.push(index);
                
                if($scope.selectedRow.indexOf(employee.id) == -1){
                    $scope.selectedRow.push(employee.id);
              }
              else {
                $scope.selectedRow.splice($scope.selectedRow.indexOf(employee.id), 1);
              }
       
             
        };
        $scope.deleteSelected = function() {
            for (var i = $scope.selectedRow.length - 1; i >= 0; i--) {
                if ($scope.selectedRow[i]) {
                    employeesService.deleteUser($scope.employees , $scope.selectedRow[i]);
                    $scope.selectedRow.splice(i, 1);
                }
            }
        };
};

function editController($scope,loginService,employeesService,$location,$routeParams) {
    
          var userId = $routeParams.userId;
          $scope.unique = false;
          $scope.error = '';
          if(userId > 0) {
                $scope.employee = employeesService.getUserById(userId , true);
                $scope.save = function(employee) {
                    if(!$scope.verifyDuplicate(employee)) {
                        employeesService.updateUser(employee);
                        $location.path('/home');
                    }
                };
                $scope.verifyDuplicate = function(employee) {
                    
                    var user = employeesService.getUser(employee.email);
                    if(user && user.id != employee.id) {
                       $scope.unique = true; 
                    } else {
                         $scope.unique = false;
                    }
                    return $scope.unique;
                }
          } else {
              $location.path('/home');
          }
          
    
};

function addCtrl($scope,loginService,employeesService,$location,$routeParams) {
    
          
        $scope.unique = false;
        $scope.error = '';
          
        $scope.employee = {};
        $scope.save = function(employee) {
            if(!$scope.verifyDuplicate(employee)) {
                employeesService.saveUser(employee);
                $location.path('/home');
            }
        };
        $scope.verifyDuplicate = function(employee) {

            var user = employeesService.getUser(employee.email);
            if(user && user.id != employee.id) {
               $scope.unique = true; 
            } else {
                 $scope.unique = false;
            }
            return $scope.unique;
        }
   
};
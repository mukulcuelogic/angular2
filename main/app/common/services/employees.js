angular.module('employees.service',[])
       .service('employeesService',['$filter' , '$rootScope', employeesService]);



function employeesService($filter, $rootScope) {

  var service = {};
  var employees = {};
  service.get = get;
  service.employees = service.get();
  service.getUser = getUser;
  service.getUserById = getUserById;
  service.updateUser = updateUser;
  service.deleteUser = deleteUser;
  service.saveUser = saveUser;
  
  return service;


  function get() {
    return [
        {'id' : 1 , 'fullName' : 'Pranay' , 'email' : 'pranay@gmail.com' , 'address' : 'Pranay Address', age: 28, gender: 'M', education: 'M.COM'},
        {'id' : 2 , 'fullName' : 'Shamsher' , 'email' : 'shamsher@gmail.com' , 'address' : 'Shamsher Address', age: 25, gender: 'M', education: 'M.Tech'},
        {'id' : 3 , 'fullName' : 'Amrutha' , 'email' : 'amrutha@gmail.com' , 'address' : 'Amrutha Address', age: 26, gender: 'M', education: 'MCA'},
        {'id' : 4 , 'fullName' : 'Mukul' , 'email' : 'mukul@gmail.com' , 'address' : 'Mukul Address', age: 24, gender: 'M', education: 'B.Tech'}];
  }
  function updateUser(user) {
      
      angular.forEach(service.employees, function(value, key) {
        if(value.id == user.id)  {
            service.employees[key] = user;
        };
      });
      
  }
  
  function saveUser(user) {
      console.log(user);
      user.id = service.employees.length + 1;
      service.employees.push(user);
      console.log(service.employees);
  }
  function deleteUser(employees , id) {
//      console.log(employees);
      angular.forEach(employees, function(value, key) {
//          console.log(value);
//          console.log(value.id);console.log(id);
//          if(employees.hasOwnProperty(value.id)) {
              
            if(value.id == id) {
                
                employees.splice(key , 1);
            }
//          }
      });
      return employees;
//      console.log(employees);
      
      
  }
  
  function getUser(email) {
    return $filter('filter')(get(), {email: email })[0];
  }
  function getUserById(id , runtime) {
      if(runtime) return $filter('filter')(service.employees, {id: id })[0];
    return $filter('filter')(get(), {id: id })[0];
  }
};

angular.module('employees.service',[])
       .service('employeesService',['$filter' , employeesService]);



function employeesService($filter) {

  var service = {};
  service.get = get;
  service.getUser = getUser;
  return service;


  function get() {
    return [
        {'fullName' : 'Pranay' , 'email' : 'pranay@gmail.com' , 'address' : 'Pranay Address', age: 28, gender: 'M', education: 'M.COM'},
        {'fullName' : 'Shamsher' , 'email' : 'shamsher@gmail.com' , 'address' : 'Shamsher Address', age: 25, gender: 'M', education: 'M.Tech'},
        {'fullName' : 'Amrutha' , 'email' : 'amrutha@gmail.com' , 'address' : 'Amrutha Address', age: 26, gender: 'M', education: 'MCA'},
        {'fullName' : 'Mukul' , 'email' : 'mukul@gmail.com' , 'address' : 'Mukul Address', age: 24, gender: 'M', education: 'B.Tech'}];
  }
  function getUser(email) {
    return $filter('filter')(get(), {email: email })[0];
  }
};

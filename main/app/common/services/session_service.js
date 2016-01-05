angular.module('session.service',['login.service'])
       
   .service('sessionService', function($rootScope, $location, loginService) {
    var service = this;

    service.request = function(config) { 
//        console.log('req');
        var currentUser = loginService.getSession(),
               
            access_token = currentUser ? currentUser.access_token : null;
//             console.log(currentUser);
        if (access_token) {
            config.headers.authorization = access_token;
        } else {
             console.log('req');
//            $location.path('/login');
            $rootScope.$broadcast('unauthorized');
        }
        return config;
    };

    service.response = function(response) {
        return response;
    };
    
    service.responseError = function(response) {
        return response;
    };
})
angular.module('login.service',['credentials.service','LocalStorageModule'])
       
       .service('loginService',['credentials','localStorageService',loginService]);

function loginService(credentials,localStorageService) {
    
    var service = {};
    service.login = login;
    service.logout = logout;
    service.setSession = setSession;
    service.getSession = getSession;
    return service;
  
    function login(email, password, callback) {

            var response;
            var user  = credentials.getAllByEmail(email);
//            console.log(user);
            if (typeof user !== 'undefined' && user !== null && user.password === password) {
                response = { success: true , user : user};
            } else {
                response = { success: false, message: 'Username or password is incorrect' };
            }
            callback(response);
    }
    
    function logout() {
        if(getSession()) {
            return localStorageService.remove('session');
        }
    }
        
    function setSession(user) {
        delete user.password;
        return localStorageService.set('session', user);
    }

    function getSession() {
        return localStorageService.get('session');
    }
};

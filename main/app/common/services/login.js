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
            return localStorageService.remove('app_access_session');
        }
    }
        
    function setSession(user) {
        var currentUser = {
            'authenticated' : true,
            'name' : user.name,
            'email' : user.email,
            'access_token' : user.id,
        };
        return localStorageService.set('app_access_session', currentUser);
    }

    function getSession() {
        return localStorageService.get('app_access_session');
    }
};

const UserService = require('./../services/UserService');

const login = (request, h) => {

    const userEmail = request.payload.email;
    const userPassword = request.payload.password;
    
    return UserService.login(userEmail, userPassword).then(user => {
        request.cookieAuth.set({user});
        request.cookieAuth.ttl(2 * 60 * 60 * 1000);
        return {
            "isAuthenticated": true 
        };
    }).catch(err => {
        console.log(err);
        return {
            "isAuthenticated": false 
        };
    });
}

const logout = (request, h) => {
    return UserService.logout().then(success => {
        request.cookieAuth.clear();
    }).catch(err => {
        console.log(err);
        return {
            "isAuthenticated": true 
        };
    });
}

module.exports = {
    login, logout
}

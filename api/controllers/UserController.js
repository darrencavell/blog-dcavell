const UserService = require('./../services/UserService');

const login = (request, h) => {

    const userEmail = request.payload.email;
    const userPassword = request.payload.password;
    
    return UserService.login(userEmail, userPassword).then(response => {
        if(response !== null) { // User found
            request.cookieAuth.set(response);
            request.cookieAuth.ttl(2 * 60 * 60 * 1000);
            return 200;
        }
        return 404; // User 🙈 found
    });
}

const logout = (request, h) => {

    const isCookieExists = request.state.session;

    return UserService.logout(isCookieExists).then(response => {
        console.log(response);
        if(response === 200) { // Cookie found
            request.cookieAuth.clear(); 
            return 200;
        }
        return 404; // Cookie 🙈 found
    });
}

module.exports = {
    login, logout
}

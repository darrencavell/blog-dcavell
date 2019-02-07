const UserService = require('./../services/UserService');

const login = (request, h) => {
    if(request.state.session === undefined) { // Not Authenticate
        const userEmail = request.payload.email;
        const userPassword = request.payload.password;
        return UserService.login(userEmail, userPassword).then(response => {
            request.cookieAuth.set(response);
            request.cookieAuth.ttl(2 * 60 * 60 * 1000);
            return { // User found
                "status": 302
            }
        }).catch(() => {
            return { // User not found
                "status": 404
            }
        });
    }
    return { // Unauthorized
        "status": 401
    }
}

const logout = (request, h) => {
    if(request.state.session !== undefined) { // Authenticate
        const isCookieExists = request.state.session;
        return UserService.logout(isCookieExists).then(response => {
            request.cookieAuth.clear(); 
            return { // Cookie found
                "status": 302
            }
        }).catch(() => {
            return { // Cookie Not found
                "status": 404
            }
        });
    } 
    return { // Unauthorized
        "status": 401
    }
}

module.exports = {
    login, logout
}

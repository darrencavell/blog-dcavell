const UserService = require('./../services/UserService');
var jwt = require('jsonwebtoken');

const login = (request, h) => {
    const userEmail = request.payload.email;
    const userPassword = request.payload.password;
    return UserService.login(userEmail, userPassword).then(response => {
        var token = jwt.sign({
            exp: Math.floor(Date.now() / 1000) + (60 * 60),
            data: response.dataValues
        }, 'shhhhh');
        return {
            "status": 302,
            "token": token
        }
    }).catch(() => {
        return { // User not found
            "status": 404
        }
    });
}

const checkAuth = (request, h) => {
    let authorizeToken = request.headers['authorization'];
    return UserService.checkAuth(authorizeToken);
}

module.exports = {
    login, checkAuth
}

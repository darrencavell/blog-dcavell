const UserService = require('./../services/UserService');

const login = (request, h) => {
    const userEmail = request.payload.email;
    const userPassword = request.payload.password;
    
    return UserService.findOne(userEmail, userPassword);
}

module.exports = {
    login
}

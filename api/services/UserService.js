const UserModel = require('./../../models').User;

const login = (userEmail, userPassword) => {
    return UserModel.findOne({
        where: {
            email: userEmail, 
            password: userPassword
        }
    }).then((user) => {
        return Promise.resolve(user);
    }).catch(() => {
        return Promise.reject(404);
    })
}

const logout = (isCookieExists) => {
    console.log(isCookieExists);
    if(isCookieExists === undefined) {
        return Promise.reject(404);
    }
    return Promise.resolve(200);
}

module.exports = {
    login, logout
}
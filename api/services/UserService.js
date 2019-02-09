const UserModel = require('./../../models').User;
var jwt = require('jsonwebtoken');

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

const checkAuth = (authorizeToken) => {
    console.log('authoeized');
    console.log(authorizeToken);
    if(authorizeToken !== undefined){
        const token = authorizeToken.substring(authorizeToken.indexOf(' ')+1);
        const decoded = jwt.verify(token, 'shhhhh');
        return { // Token found
            "status": 302,
            "userId": decoded.data.id
        }
    }
    return { // Token not found
        "status": 404
    }
}

module.exports = {
    login, checkAuth
}
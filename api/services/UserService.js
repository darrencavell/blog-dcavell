const UserModel = require('./../../models').User;

const login = (userEmail, userPassword) => {
    return UserModel.findOne({
        where: {
            email: userEmail, 
            password: userPassword
        }
    }).then(user => {
        if(user) {
            console.log(user);
            return user;
        }
    }).catch((err) => {
        console.log(err);
        return {
            "isAuthenticated": false
        };
    })
}

const logout = () => {
    return {
        "isAuthenticated": false
    }
}

module.exports = {
    login, logout
}
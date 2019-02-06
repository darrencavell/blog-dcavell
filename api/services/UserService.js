const UserModel = require('./../../models').User;
const findOne = (userEmail, userPassword) => {
    return UserModel.findOne({
        where: {email: userEmail, password: userPassword}
    }).then(user => {
        if(user) return {"pass": true};
        return {"pass": false};
    }).catch((err) => {
        console.log(err);
    })
}

module.exports = {
    findOne
}
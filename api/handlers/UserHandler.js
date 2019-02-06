const UserController = require('./../controllers/UserController');

module.exports = {
    login: {
        handler: UserController.login
    }
}
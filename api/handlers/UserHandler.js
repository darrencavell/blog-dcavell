const UserController = require('./../controllers/UserController');
const Joi = require('joi');

module.exports = {
    login: {
        handler: UserController.login,
        validate: {
            payload: {
                email: Joi.string().required(),
                password: Joi.string().required()
            }
        }
    },
    logout: {
        handler: UserController.logout
    }
}
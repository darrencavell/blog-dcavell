const BlogController = require('./../controllers/BlogController');
const Joi = require('joi');

module.exports = {
    view: {
        handler: BlogController.viewBlog
    },
    insert: {
        handler: BlogController.insertBlog,
        validate: {
            payload: {
                userId: Joi.number().integer().required(),
                name: Joi.string().required(),
                content: Joi.string().required(),
                tags: Joi.required()
            }
        }
    },
    update: {
        handler: BlogController.updateBlog,
        validate: {
            payload: {
                id: Joi.number().integer().required(),
                name: Joi.string().required(),
                content: Joi.string().required(),
            }
        }
    },
    delete: {
        handler: BlogController.deleteBlog
    }
}
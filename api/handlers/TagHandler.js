const TagController = require('./../controllers/TagController');

module.exports = {
    view: {
        handler: TagController.viewTag
    }, 
    listTag: {
        handler: TagController.listTag
    }
}
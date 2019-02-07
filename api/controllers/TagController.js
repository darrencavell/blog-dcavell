const TagService = require('./../services/TagService');

const viewTag = (request, h) => {
    const page = request.params.pageNumber;
    const tagName = request.params.tag;
    return TagService.findByTag(page, tagName);
}

module.exports = {
    viewTag
}
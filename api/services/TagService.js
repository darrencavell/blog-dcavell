const BlogTagModel = require('./../../models').BlogTag;
const TagModel = require('./../../models').Tag;

const findByTag = (pageNumber, tagName) => {
    let limit = 2;
    let offset = 0;
    const camelCaseTagName = tagName.charAt(0).toUpperCase() + tagName.slice(1);
    return TagModel.findOne({
        where: {
            name: camelCaseTagName
        }
    }).then(data => {
        return BlogTagModel.findAndCountAll({
            where: {
                tagId: data.id
            },
            limit: limit,
            offset: offset,
        }).then(dataSearched => {
            let pages = Math.ceil(dataSearched.count / limit);
            offset = limit * (pageNumber - 1);
            return {
                "pages": pages, 
                "content": dataSearched
            };
        })
    }).catch(err => {
        console.log(err);
    })
    
}

module.exports = {
    findByTag
}
const BlogTagModel = require('./../../models').BlogTag;
const TagModel = require('./../../models').Tag;
const BlogModel = require('./../../models').Blog;
const UserModel = require('./../../models').User;

const findByTag = (pageNumber, tagName) => {
    let limit = 2;
    let offset = 0;
    const camelCaseTagName = tagName.charAt(0).toUpperCase() + tagName.slice(1);
    return TagModel.findOne({
        where: {
            name: camelCaseTagName
        }
    }).then(data => {
        return BlogTagModel.findAndCountAll().then(data => {
            let pages = Math.ceil(data.count / limit);
            offset = limit * (pageNumber - 1);
            return BlogTagModel.findAll({
                limit: limit,
                offset: offset,
                attributes: {
                    exclude: ['createdAt']
                },
                include: [
                    {
                        model: BlogModel,
                        attributes: {
                            exclude: ['createdAt']
                        },
                        include: [
                            {
                                model: BlogTagModel,
                                attributes: {
                                    exclude: ['id', 'createdAt', 'updatedAt']
                                },
                                include: [
                                    {
                                        model: TagModel,
                                        attributes: {
                                            exclude: ['id', 'createdAt', 'updatedAt']
                                        }
                                    }
                                ],
                            },
                            {
                                model: UserModel,
                                attributes: {
                                    exclude: ['createdAt', 'password']
                                }
                            }
                        ],
                    },
                    {
                        model: TagModel,
                        attributes: {
                            exclude: ['createdAt']
                        }
                    }
                ]
            }).then(dataSearched => {
                return {
                    "pages": pages, 
                    "content": dataSearched
                };
            })
        }).catch(err => {
            console.log(err);
        })
    }).catch(err => {
        console.log(err);
    })
    
}

module.exports = {
    findByTag
}
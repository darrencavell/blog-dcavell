const BlogModel = require('./../../models').Blog;
const BlogTagModel = require('./../../models').BlogTag;
const TagModel = require('./../../models').Tag;
const UserModel = require('./../../models').User;

const viewBlog = (pageNumber) => {
    let limit = 2;
    let offset = 0;
    return BlogModel.findAndCountAll().then(data => {
        let pages = Math.ceil(data.count / limit);
        offset = limit * (pageNumber - 1);
        return BlogModel.findAll({
            limit: limit,
            offset: offset,
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
        }).then(dataOnCertainPage => {
            return {
                "pages": pages,
                "content": dataOnCertainPage
            };
        });
    }).catch(err => {
        console.log(err);
    });
}

const insertBlog = (blogUserId, blogName, blogContent, blogTags) => {
    return BlogModel.create({
        userId: blogUserId,
        name: blogName,
        content: blogContent,
        createdAt: new Date(),
        updatedAt: new Date()
    }).then(blog => {
        blogTags.map(tag => {
            BlogTagModel.create({
                blogId: blog.id,
                tagId: tag,
                createdAt: new Date(),
                updatedAt: new Date()
            })
        });
        return {
            "created": true
        }
    }).catch(err => {
        console.log(err);
        return {
            "created": false
        }
    })
}

const updateBlog = (blogUserId, blogId, blogName, blogContent) => {
    return BlogModel.findOne({
        where: {
            id: blogId,
            userId: blogUserId
        }
    }).then(blog => {
        blog.name = blogName;
        blog.content = blogContent;
        blog.updatedAt = new Date()
        return blog.save().then(success => {
            return {
                "owner": true,
                "updated": true
            }
        }).catch(err => {
            console.log(err);
            return {
                "owner": true,
                "updated": false
            }
        })
    }).catch(err => {
        console.log(err);
        return {
            "owner": false,
            "updated": false
        }
    })
}

const deleteBlog = (blogUserId, blogId) => {
    return BlogModel.destroy({
        where: {
            id: blogId,
            userId: blogUserId
        }
    }).then(result => {
        if(result == 1){
            return {
                "owner": true,
                "deleted": true
            }
        }else {
            return {
                "owner": false,
                "deleted": false
            }
        }
    })
}

module.exports = {
    viewBlog, insertBlog, updateBlog, deleteBlog
}
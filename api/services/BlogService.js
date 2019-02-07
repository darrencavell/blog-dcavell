const BlogModel = require('./../../models').Blog;
const BlogTagModel = require('./../../models').BlogTag;

const viewBlog = (pageNumber) => {
    let limit = 2;
    let offset = 0;
    return BlogModel.findAndCountAll().then(data => {
        let pages = Math.ceil(data.count / limit);
        offset = limit * (pageNumber - 1);
        return BlogModel.findAll({
            limit: limit,
            offset: offset
        }).then(dataOnCertainPage => {
            return {
                "pages": pages,
                "content": dataOnCertainPage
            };
        });
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
            "pass": true
        }
    }).catch(err => {
        console.log(err);
        return {
            "pass": false
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
                "pass": true
            }
        }).catch(err => {
            console.log(err);
            return {
                "pass": false
            }
        })
    }).catch(err => {
        console.log(err);
        return {
            "pass": "bukan punya sendiri oncom"
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
                "pass": true
            }
        }else {
            return {
                "pass": "bukan punya sendiri oncom"
            }
        }
    })
}

module.exports = {
    viewBlog, insertBlog, updateBlog, deleteBlog
}
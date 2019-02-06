const BlogModel = require('./../../models').Blog;

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
            return dataOnCertainPage;
        });
    });
}

const insertBlog = (blogUserId, blogName, blogContent, blogSlug) => {
    return BlogModel.create({
        userId: blogUserId,
        name: blogName,
        content: blogContent,
        slug: blogSlug,
        createdAt: new Date(),
        updatedAt: new Date()
    }).then(blog => {
        return {"pass": true};
    }).catch(err => {
        return {"pass": err};
    })
}

const updateBlog = (blogId, blogUserId, blogName, blogContent, blogSlug) => {
    return BlogModel.findOne({
        where: {id: blogId}
    }).then(blog => {
        blog.userId = blogUserId;
        blog.name = blogName;
        blog.content = blogContent;
        blog.slug = blogSlug;
        blog.updatedAt = new Date()
        return blog.save().then(success => {
            return {"pass": true}
        }).catch(err => {
            return {"pass": false}
        })
    }).catch(err => {
        return {"pass": false}
    })
}

const deleteBlog = (blogId) => {
    return BlogModel.findOne({
        where: {id: blogId}
    }).then(blog => {
        return blog.destroy().then(success => {
            return {"pass": true}
        }).catch(err => {
            return {"pass": false}
        })
    }).catch(err => {
        return {"pass": false}
    })
}

module.exports = {
    viewBlog, insertBlog, updateBlog, deleteBlog
}
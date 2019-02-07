const BlogService = require('./../services/BlogService');

const viewBlog = (request, h) => {
    const page = request.params.pageNumber;
    return BlogService.viewBlog(page);
}

const insertBlog = (request, h) => {
    if(request.state.session === undefined) {
        return {
            'status': 404
        };
    } else {
        const blogUserId = request.state.session.id;
        const blogName = request.payload.name;
        const blogContent = request.payload.content;
        const blogTags = request.payload.tags;
        return BlogService.insertBlog(blogUserId, blogName, blogContent, blogTags);
    }
}
const updateBlog = (request, h) => {
    if(request.state.session === undefined) {
        return {
            'status': 404
        };
    } else {
        const blogUserId = request.state.session.id;
        const blogId = request.payload.id;
        const blogName = request.payload.name;
        const blogContent = request.payload.content;
        return BlogService.updateBlog(blogUserId, blogId, blogName, blogContent);
    }
}
const deleteBlog = (request, h) => {
    if(request.state.session === undefined) {
        return {
            'status': 404
        };
    } else {
        const blogUserId = request.state.session.id;
        const blogId = request.payload.id;
        return BlogService.deleteBlog(blogUserId, blogId);
    }
}

module.exports = {
    viewBlog, insertBlog, updateBlog, deleteBlog
}
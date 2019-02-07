const BlogService = require('./../services/BlogService');

const viewBlog = (request, h) => {
    const page = request.params.pageNumber;
    return BlogService.viewBlog(page);
}

const insertBlog = (request, h) => {

    if(request.auth.isAuthenticated) {
        return {
            'isAuthenticated': false
        };
    }

    const blogUserId = request.state.session.user.id;
    const blogName = request.payload.name;
    const blogContent = request.payload.content;
    const blogTags = request.payload.tags;

    return BlogService.insertBlog(blogUserId, blogName, blogContent, blogTags);
}
const updateBlog = (request, h) => {

    if(request.auth.isAuthenticated) {
        return {
            'isAuthenticated': false
        };
    }

    const blogUserId = request.state.session.user.id;
    const blogId = request.payload.id;
    const blogName = request.payload.name;
    const blogContent = request.payload.content;

    return BlogService.updateBlog(blogUserId, blogId, blogName, blogContent);
}
const deleteBlog = (request, h) => {

    if(request.auth.isAuthenticated) {
        return {
            'isAuthenticated': false
        };
    }

    const blogUserId = request.state.session.user.id;
    const blogId = request.payload.id;

    console.log(blogId);

    return BlogService.deleteBlog(blogUserId, blogId);
}

module.exports = {
    viewBlog, insertBlog, updateBlog, deleteBlog
}
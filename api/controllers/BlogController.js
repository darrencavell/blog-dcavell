const BlogService = require('./../services/BlogService');

const viewBlog = (request, h) => {
    const page = request.params.pageNumber;
    return BlogService.viewBlog(page);
}

const insertBlog = (request, h) => {
    const blogUserId = request.payload.userId;
    const blogName = request.payload.name;
    const blogContent = request.payload.content;
    const blogSlug = request.payload.slug;

    return BlogService.insertBlog(blogUserId, blogName, blogContent, blogSlug);
}
const updateBlog = (request, h) => {
    const blogId = request.payload.id;
    const blogUserId = request.payload.userId;
    const blogName = request.payload.name;
    const blogContent = request.payload.content;
    const blogSlug = request.payload.slug;

    return BlogService.updateBlog(blogId, blogUserId, blogName, blogContent, blogSlug);
}
const deleteBlog = (request, h) => {
    const blogId = request.payload.id;

    return BlogService.deleteBlog(blogId);
}

module.exports = {
    viewBlog, insertBlog, updateBlog, deleteBlog
}
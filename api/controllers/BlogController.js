const BlogService = require('./../services/BlogService');
var jwt = require('jsonwebtoken');

const viewBlog = (request, h) => {
    const page = request.params.pageNumber;
    return BlogService.viewBlog(page);
}

const insertBlog = (request, h) => {
    let authorizeToken = request.headers['authorization'];
    if(authorizeToken !== undefined){
        const token = authorizeToken.substring(request.headers['authorization'].indexOf(' ')+1);
        const decoded = jwt.verify(token, 'shhhhh');

        const blogUserId = decoded.data.id;
        const blogName = request.payload.name;
        const blogContent = request.payload.content;
        const blogTags = request.payload.tags;
        return BlogService.insertBlog(blogUserId, blogName, blogContent, blogTags);
    }
    return {
        'isAuthenticated': false
    }
    // if(request.state.session === undefined) {
    //     return {
    //         'status': 404
    //     };
    // } else {
    //     const blogUserId = request.state.session.id;
    //     const blogName = request.payload.name;
    //     const blogContent = request.payload.content;
    //     const blogTags = request.payload.tags;
    //     return BlogService.insertBlog(blogUserId, blogName, blogContent, blogTags);
    // }
}
const updateBlog = (request, h) => {
    let authorizeToken = request.headers['authorization'];
    if(authorizeToken !== undefined){
        const token = authorizeToken.substring(request.headers['authorization'].indexOf(' ')+1);
        const decoded = jwt.verify(token, 'shhhhh');
        
        const blogUserId = decoded.data.id;
        const blogId = request.payload.id;
        const blogName = request.payload.name;
        const blogContent = request.payload.content;
        return BlogService.updateBlog(blogUserId, blogId, blogName, blogContent);
    }
    return {
        'isAuthenticated': false
    }
}
const deleteBlog = (request, h) => {
    let authorizeToken = request.headers['authorization'];
    if(authorizeToken !== undefined){
        const token = authorizeToken.substring(request.headers['authorization'].indexOf(' ')+1);
        const decoded = jwt.verify(token, 'shhhhh');
        
        const blogUserId = request.state.session.id;
        const blogId = request.payload.id;
        return BlogService.deleteBlog(blogUserId, blogId);
    }
    return {
        'isAuthenticated': false
    }
}

module.exports = {
    viewBlog, insertBlog, updateBlog, deleteBlog
}
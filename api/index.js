const UserHandler = require('./handlers/UserHandler');
const BlogHandler = require('./handlers/BlogHandler');
const TagHandler = require('./handlers/TagHandler');

module.exports = {
    register: (server) => {
        server.route([
            {
                method: 'GET',
                path: '/{name}',
                handler: (request, h) => {
                    return 'Hello, ' + encodeURIComponent(request.params.name) + '!';
                }
            },
            {
                method: 'POST',
                path: '/login',
                options: UserHandler.login
            },
            {
                method: 'GET',
                path: '/logout',
                options: UserHandler.logout
            },
            {
                method: 'GET',
                path: '/blog/get/{pageNumber}',
                options: BlogHandler.view
            },
            {
                method: 'POST',
                path: '/blog/create',
                options: BlogHandler.insert
            },
            {
                method: "PUT",
                path: '/blog/update',
                options: BlogHandler.update
            },
            {
                method: 'DELETE',
                path: '/blog/delete',
                options: BlogHandler.delete
            },
            {
                method: 'GET',
                path: '/{tag}/get/{pageNumber}',
                options: TagHandler.view
            },
            {
                method: 'GET',
                path: '/',
                handler: (request, h) => {
                    return 'Hello, world!';
                }
            }
        ]);
    },
    name: 'api'
};
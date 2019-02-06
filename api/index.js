const UserHandler = require('./handlers/UserHandler');
const BlogHandler = require('./handlers/BlogHandler');

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
                path: '/post/get/{pageNumber}',
                options: BlogHandler.view
            },
            {
                method: 'POST',
                path: '/post/create',
                options: BlogHandler.insert
            },
            {
                method: "PUT",
                path: '/post/update',
                options: BlogHandler.update
            },
            {
                method: 'DELETE',
                path: '/post/delete',
                options: BlogHandler.delete
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
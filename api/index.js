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
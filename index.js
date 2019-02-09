'use strict';

const Hapi = require('hapi');

const server = Hapi.server({
    port: 3030,
    host: 'localhost',
    routes: {
        cors: true
    }
});

const init = async () => {
    await server.register(require('./api'));
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();
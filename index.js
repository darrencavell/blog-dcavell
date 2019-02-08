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
    await server.register(require('hapi-auth-cookie'));

    const cache = server.cache({ segment: 'sessions', expiresIn: 2 * 60 * 60 * 1000 });
    server.app.cache = cache;
    server.auth.strategy('session', 'cookie', {
        password: '$2a$10$JwbwopKOwGepKZ/bRbFjB.1Av0HMxxbmGYDeofT55db1WdPEmIf82',
        cookie: 'session',
        isSecure: false,
        validateFunc: async (request, session) => {
            const cached = await cache.get(session.sid);
            const out = {
                valid: !!cached
            };
            if (out.valid) {
                out.credentials = cached.account;
            }
            return out;
        }
    });
    await server.register(require('./api'));
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();
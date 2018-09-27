var Hapi = require('hapi');
var server = new Hapi.Server({host: 'localhost', port: 3000});

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, h) {
        return 'Hello World!';
    }
});

server.start( 
       console.log('catch the action at : '+ server.info.uri) 
);
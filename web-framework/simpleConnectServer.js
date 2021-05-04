let connect = require('connect');
let http = require('http');
// Create a connect dispatcher
let app = connect()
    // register a middleware
    .use(function (req, res, next) {
        res.write(Date.now() + '\n');
        res.write('hello client11!\n');
        next();
    }).use((req, res, next) => {
        res.write('hello client22!');
        res.end();
        next()
    });

// Register with http
// http.createServer(app)
//     .listen(3000);

/* What connect actually implemented
https://github.com/senchalabs/connect/blob/5c52e388feaa914a5a054fac21c4f4c6698a64c4/index.js#L215 
app.listen = function () {
    console.log(arguments);
    var server = http.createServer(this);
    // return server.listen.apply(server, [port]);
    return server.listen.apply(server, arguments);
}; */
app.listen(3000);
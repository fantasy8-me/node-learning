let connect = require('connect');
let http = require('http');
// Create a connect dispatcher
let app = connect()
    // register a middleware
    .use(function (req, res, next) {
        res.write(Date.now() + '\n');
        res.write('hello client11!\n');
        next();
    }).use('/foo', (req, res, next) => {
        res.write('hello for foo!\n');
        next();
    }
    ).use((req, res, next) => {
        res.write('hello client22!');
        res.end();
        next()
    });


app.listen(3000);
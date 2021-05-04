var server = http.createServer(function (request, response) {
    // respond
    response.write('hello client!');
    response.end();
});

server.listen(3000);
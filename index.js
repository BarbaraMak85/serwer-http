var fs = require('fs');
var http = require('http');

var server = http.createServer();

server.on('request', function(request, response) {

    if (request.method === 'GET' && request.url === '/hello') {
        var index = fs.readFile('./index.html', function(err, content) {
            response.writeHead(200, { 'Content-type': 'text/html' })
            response.end(content);
        })
    } else {
        fs.readFile('./404.jpg', function(err, content) {

            //specify the content type in the response will be an image
            response.writeHead(404, { 'Content-type': 'image/jpg' });
            response.end(content);

        });
    }
});



server.listen(9000);
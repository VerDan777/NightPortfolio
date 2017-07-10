var http = require('http');
http.createServer(function(req, res) {
 console.log('HTTP server running');
 res.writeHead(200, {'Content-Type': 'text/html'});
 res.end('<h1>Hello student from Loftschool!</h1>');
}).listen(8080);
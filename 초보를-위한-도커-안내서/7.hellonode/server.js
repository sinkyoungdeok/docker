const http = require('http');
const os = require('os');

const port = process.env.PORT || 8080;

process.on('SIGINT', function() {
    console.log('shutting down...');
    process.exit(1);
});

var handleRequest = function(request, response) {
    console.log(`Received request for URL: ${request.url}`);
    response.writeHead(200);
    response.end(`Hello, World!\nHostname: ${os.hostname()}\n`);
};

var www = http.createServer(handleRequest);
www.listen(port, () => {
    console.log(`server listening on port ${port}`);
});
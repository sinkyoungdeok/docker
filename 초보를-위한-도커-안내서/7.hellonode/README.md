### hellonode 빌드하고 실행하기

**server.js**

```
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
```

**Dockerfile**

```
FROM   node:12-alpine
COPY   server.js /app/
EXPOSE 8080
CMD    ["node", "/app/server.js"]
```

**run**

```
$ docker build -t hellonode .
$ docker run --rm -d \
  -p 60000:8080 \
  hellonode
```
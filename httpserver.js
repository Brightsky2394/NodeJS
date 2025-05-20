const http = require('http');
const fs = require('fs');


const httpServer = http.createServer((req, res) => {
    if (req.url === '/') {
        const readStream = fs.createReadStream('example.html');
        res.writeHead(200, {'Content-type': 'text/html'});
        readStream.pipe(res);
    } else {
        res.writeHead(200, {'Content-type': 'text/html'});
        res.write('Accessing some other domain');
        res.end();
    }
})

httpServer.listen(4000);
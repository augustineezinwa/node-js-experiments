const cluster = require("cluster");
const os = require("os");

console.log(os.cpus().length);

if(cluster.isMaster) {
    console.log(`Master process ${process.pid} is running`);
    cluster.fork();
    cluster.fork();
} else {
    console.log(`Worker process ${process.pid} is running`);
    const fs = require('fs'); 
    const http = require("http");

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.writeHead(200, { "Content-type": "text/html"});
        res.end(fs.readFileSync("index.html", "utf-8"));
        fs.ReadStream("./index.html").pipe(res);
    } else if(req.url === '/slow-page'){
        for(let i = 0; i< 10000000000; i++) {}
        res.writeHead(200,{ "Content-type": "text/html"});
        res.end("Hello slow page")
    }
 
  });

server.listen(3000, () => console.log("server is listening on port 3000"));
}
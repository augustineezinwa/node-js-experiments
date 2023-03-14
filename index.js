

 
//  const readFile = async () => {
//     try {
//     const fileContents =  await fs.readFile("./file.txt", "utf-8");
//     console.log(fileContents);
//     } catch(err) {
//         console.log(err);
//     }
//  }

//  readFile();

// -------------------------------------------------------------------------

// import fs from 'fs';
// import zlib from 'zlib';

// const gzip = zlib.createGzip();

// const readableStream = fs.createReadStream("./file.txt", { encoding: "utf-8"});
// const writableStream = fs.createWriteStream("./file2.txt");

// readableStream.on("data", (chunk) => {
//     console.log(chunk);
//     writableStream.write(chunk);
// });

// readableStream.pipe(gzip).pipe(fs.WriteStream("./file2.txt.gz"));

// readableStream.pipe(writableStream);

// --------------------------------------------------------------------------------

// import http from 'http';
// import fs from 'fs';
const obj = {
    "id": 1,
    "firstName": "donkey",
    "lastName": "luanhask"
}


// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-type": "application/json"});
//   res.end(JSON.stringify(obj));
// })

// const server = http.createServer((req, res) => {
//     res.writeHead(200, { "Content-type": "text/html"});
//     //res.end(fs.readFileSync("index.html", "utf-8"));
//     fs.ReadStream("./index.html").pipe(res);
//   })

// server.listen(3000, () => console.log("server is listening on port 3000"));

// ---------------------------------------------------------------------------------

const crypto = require('crypto');
const https = require('https')

// process.env.UV_THREADPOOL_SIZE=9;
const start = new Date();


// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");

//let MAX_CALL = 1;
// for(let i = 0; i < MAX_CALL; i++) {
    // crypto.pbkdf2("password", "salt", 100000, 512, "sha512", (err, data) => {
    //     console.log("Hash " + `${i + 1}`, Date.now() - start);
    // });
//    https.request("https://www.google.com", (res) => {
//     res.on("data", () => {});
//     res.on("end", () => {
//         console.log("Request " + `${i + 1}`, Date.now() - start);
//     })
 //  });
//}

// ---------------------------------------------------------------------------------

// const fs = require("fs");
// const readableStream = fs.createReadStream(__filename);
// readableStream.close();

// readableStream.on("close", () => console.log("closing read stream"));

// fs.readFile(__dirname, () => {
//     console.log("read file 1");
//     setImmediate(() => console.log("set immediate inside read file 1"));
// });
// setTimeout(() => console.log("set time out 1"), 8000);
// setTimeout(() => {
//     console.log("set timeout 2,");
//     process.nextTick(() => console.log("next tick inside set timeout"));
// }, 9000);
// setTimeout(() => {
//     console.log("set timeout 3");
// }, 0);
// console.log("console.log 1");
// Promise.resolve().then(() => console.log("console.log 4 - resolve 1"));
// process.nextTick(() => console.log("console.log 2 - next tick"));
// process.nextTick(() => {
//     console.log("next tick 3")
//     process.nextTick(() => console.log("inner next tick 3"));
// });
// Promise.resolve().then(() => {
//     console.log("loggin resolve 2");
//     process.nextTick(() => console.log("inner next 4 inside resolve 2"));
// })
// console.log("console.log 3");
// setImmediate(() => console.log("set immediate"));

// ------event loop is a c program that orchestrates or coordinates the sycnhronous or async programs of node codes
// next-tick -> promise ->timer ->i/o ->check -> close
// next-tick -> promise -> timer -> check -> i/o polling -> close

// next-tick -> process.nextTick
// promise -> Promise.resolve()
// i/o => fs.readFile, fs.writeFile
// check => setImmediate(() => console.log ("s"))
//close => close queue
   
const fs = require('fs'); 
const http = require("http");
const { Worker } = require("worker_threads");

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.writeHead(200, { "Content-type": "text/html"});
        res.end(fs.readFileSync("index.html", "utf-8"));
        fs.ReadStream("./index.html").pipe(res);
    } else if(req.url === '/slow-page'){
        const worker = new Worker("./worker_thread.js");
        worker.on("message", (j) => {
            res.writeHead(200,{ "Content-type": "text/html"});
            res.end("Hello slow page " + j);
        });

    }
 
  });

server.listen(3000, () => console.log("server is listening on port 3000"));
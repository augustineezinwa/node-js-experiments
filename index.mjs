import fs from 'fs';

 
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

import http from 'http';

const obj = {
    "id": 1,
    "firstName": "donkey",
    "lastName": "luanhask"
}


// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-type": "application/json"});
//   res.end(JSON.stringify(obj));
// })

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-type": "text/html"});
    //res.end(fs.readFileSync("index.html", "utf-8"));
    fs.ReadStream("./index.html").pipe(res);
  })

server.listen(3000, () => console.log("server is listening on port 3000"));

  
   

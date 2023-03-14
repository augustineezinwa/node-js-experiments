// import fs from 'fs/promises';

 
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

import fs from 'fs';

const readableStream = fs.createReadStream("./file.txt", { encoding: "utf-8"});
const writableStream = fs.createWriteStream("./file2.txt");

readableStream.on("data", (chunk) => {
    console.log(chunk);
    writableStream.write(chunk);
});

  
   

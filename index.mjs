import fs from 'fs/promises';

 
 const readFile = async () => {
    try {
    const fileContents =  await fs.readFile("./file.txt", "utf-8");
    console.log(fileContents);
    } catch(err) {
        console.log(err);
    }
 }

 readFile();
  
   

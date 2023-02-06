//File system API


import * as fs from  'fs/promises';

//creating  Directory -path should be there 
/*try {
    await fs.mkdir('C:\\Users\\KETAN\\Desktop\\Angular\\node-js\\ch6\\demo');
    console.log("Directory is created");
    
} catch (error) {
    console.log("Error");
    
}*/

//creating  Directory -path is not required to be there

/*try {
    await fs.mkdir('C:\\Users\\KETAN\\Desktop\\Angular\\node-js\\ch6\\test\\anil',{recursive:true});
    console.log("Directory is created");
    
} catch (error) {
    console.log("Error");


}*/

//read content of Directory

/*try {
const files=await fs.readdir('C:\\Users\\KETAN\\Desktop\\Angular\\node-js\\ch6\\test\\anil');
for(const file of files)
console.log(file);
}catch (error) {
    console.log(error);
}*/

//remove the  of Directory
/*try {
    await fs.rmdir('C:\\Users\\KETAN\\Desktop\\Angular\\node-js\\ch6\\test\\anil');
    console.log("Removed the directory");
} catch (error) {
    console.log(error);
    
}*/

//create a write file
/*try {
    await fs.writeFile('readmetext','This is node js files text');
} catch (error) {
    console.log(error);
}*/

//reading a files 
// data returing un buffer
/*try {
   const data= await fs.readFile('readmetext.text');
   console.log(data);
} catch (error) {
    console.log(error);
}*/
// data returing un buffer and convert to utf-8
/*try {
   const data= await fs.readFile('readmetext.text','utf-8');
   console.log(data);
} catch (error) {
    console.log(error);
}*/
/*try {
    await fs.appendFile('readmetext.txt','This is append file text');
    console.log("This is append file text");
} catch (error) {
    console.log(error);
    
}*/
//copy files

/*try {
  await fs.copyFile('readmetext.txt','info.txt')  
} catch (error) {
    console.log(error);
}*/
// get information of file 
/*
try {
    const data=await fs.stat('C:\\Users\\KETAN\\Desktop\\Angular\\node-js\\ch6\\demo\\student.js')
    console.log(data.isDirectory());
    console.log(data.isFile());
} catch (error) {
    console.log(error);
    
}
*/












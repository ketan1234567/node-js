//File system -Synchronous API
import * as fs from 'fs';

//creating Directory path should be there 

//fs.mkdirSync('C:\\Users\\KETAN\\Desktop\\Angular\\node-js\\ch8\\test\\demo',{recursive:true});

//read conetnt
/*const files= fs.readdirSync('C:\\Users\\KETAN\\Desktop\\Angular\\node-js\\ch8\\test');
for(const file of files)
console.log(file);
*/
//remove directory
//fs.rmdirSync('C:\\Users\\KETAN\\Desktop\\Angular\\node-js\\ch8\\test\\demo');

// create file
//fs.writeFileSync('readme.txt','Hello node js');

//readfile
 //const data=fs.readFileSync('readme.txt','utf-8');
 //console.log(data);

 //append file 
 //fs.appendFileSync('readme.txt','vishal');
//copy file
//fs.copyFileSync('readme.txt','info.txt');

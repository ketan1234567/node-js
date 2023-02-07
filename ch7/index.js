//file system  Callback API 
import * as fs from 'fs';  // e6 module

//creating directory 
/*fs.mkdir('C:\\Users\\KETAN\\Desktop\\Angular\\node-js\\ch7\\demo',function(error){
    if(error)throw error;
    console.log("Directory are created");
})*/

//creating directory 
//fs.mkdir('C:\\Users\\KETAN\\Desktop\\Angular\\node-js\\ch7\\test\\callbak',{recursive:true},function(error){
  //  if(error) throw error;
   // console.log("Directory are created");
//})

//read content  directory 
/*fs.readdir('C:\\Users\\KETAN\\Desktop\\Angular\\node-js\\ch7\\test',(error,files)=>{
    if(error) throw error;
    for(const file of files)
    console.log(file);
    

})*/
//Remove directory if should be empty 

/*fs.rmdir('C:\\Users\\KETAN\\Desktop\\Angular\\node-js\\ch7\\test\\callbak',(error)=>{
    if(error) throw error;
    console.log("directory  is deleted");
});*/

//creating and writing files

/*fs.writeFile('readme.txt','Hello data node js',(error)=>{
    if(error) throw error;
    console.log("File is create if it is not created");

});*/
//Read files

/*fs.readFile('readme.txt','utf-8',(error,data)=>{
    if(error) throw error;
    console.log(data);
})*/

//append data into files

/*fs.appendFile('readme.txt','Geekyshows',(error)=>{
    if(error) throw error;
    console.log("data is append");
})*/

//copy files

/*fs.copyFile('readme.txt','info.txt',(error)=>{
    if(error) throw error;
   console.log("Files is copied");
})*/

//get the information

fs.stat('C:\\Users\\KETAN\\Desktop\\Angular\\node-js\\ch7\\test\\emp.js',(error,data)=>{
    if(error) throw error;
    console.log(data.isDirectory());
    console.log(data.isFile());
});



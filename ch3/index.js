
//path module
const path=require ('path');

//console.log(path.basename('C:\Users\KETAN\Desktop\Angular\node-js\ch3\index.js'))// whatever we write last path they will return 

//console.log(path.basename(__filename)) //return the file name 
//console.log(path.basename(__filename,'.js')) //return name without extension
//console.log(path.dirname('C:\Users\KETAN\Desktop\Angular\node-js\ch3\index.js'));
//console.log(path.dirname(__filename));   // this is return dirname

//console.log(path.extname(__filename)); // we  can reconiged extension fo file name 

//console.log(path.join('search','label','course/python','oop'));// create a path using for join function 

//console.log(path.join('search','label','course/python','oop','..','..')); // The last parametr (..) is instructing path 
//path.join to 'go back Directory 

//console.log(path.join(__dirname,'code','allcode.js'));
//console.log(path.win32.normalize("c://///temp\\\\////\\\/foo/bar"));//it is doing correct path 

//console.log(path.parse(__filename).base);// this is return the objects
console.log(path.isAbsolute('//server')); //ture  it is check only 
console.log(path.isAbsolute('bar\\\baz'));





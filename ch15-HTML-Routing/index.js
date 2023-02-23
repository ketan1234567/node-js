//Routing and Serving HTML Pages in Node js
import http from 'http';
import fs from 'fs';

const serve=http.createServer((req,res)=>{
    //res.setHeader("Content-type","HTML"),
   res.writeHead(200,"Ok",{'Content-type':'text/html'})
    //res.end("<h1> This is home page<h1>")
    /*if(req.url ==='/'){ 
        res.end("<h1> This is Home Page</h1>");    
    }
    else if(req.url ==='/about'){
      res.end("<h1>This is About Page</h1>");
    }else{
        res.end("<h1>This is 404 end of error");
    }*/


       //res.end("<h1> This is home page<h1>")
    if(req.url ==='/'){ 
        fs.readFile('./public/home.html',(error,data)=>{
         if(error) throw error;
         res.end(data);
        });
           
    }
    else if(req.url ==='/about'){
        fs.readFile('./public/about.html',(error,data)=>{
            if(error) throw error;
            res.end(data);
        })
      res.end("<h1>This is About Page</h1>");
    }else{
        res.end("<h1>This is 404 end of error");
    }

});
const port=process.env.port || 8000;
const HOST='localhost';

serve.listen(port,HOST,()=>{
    console.log("server runinng at https://localhost//8000");

});





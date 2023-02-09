
//Create web serve module


import http from 'http';

const serve=http.createServer((req,res)=>{
    res.setHeader('Content-type','text/plan')
    res.end('respone from serve 1');
   

});// this is create serve instance but we have to do listener 


/*serve.listen(8000,'localhost',()=>{
    console.log("Serve Running at https://localhost:8000");
});*/




const port=process.env.PORT || 8000;
const HOST='localhost';


serve.listen(port,HOST,()=>{
    console.log("Serve Running at https://localhost:8000");
});

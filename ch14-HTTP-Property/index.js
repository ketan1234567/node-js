//refersh automatically 
import http from 'http';
const serve=http.createServer((req,res)=>{

    //request Url

    /*if(req.url !='/favicon.ico'){
        console.log(req.url);

    }
    console.log(req.method);*/


   

      // this is respone method
    /*res.statusCode=202;
    res.statusMessage="Good";  
    res.setHeader('content-type','text-plan'),*/
    //we have to write one property all this methods
    res.writeHead(202,"bood",{'content-type':'text-plan'})
    res.end('respone From serve With Http property');
});

const port=process.env.port || 8000;
const HOST='localhost';

serve.listen(port,HOST,()=>{
    console.log("serve running at https://localhost:8000");
});
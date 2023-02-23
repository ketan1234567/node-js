//refersh automatically 
import http from 'http';
const serve=http.createServer((req,res)=>{
    res.setHeader('content-type','text-plan'),
    res.end('respone From serve new packages 8000');
});

const port=process.env.port || 8000;
const HOST='localhost';

serve.listen(port,HOST,()=>{
    console.log("serve running at https://localhost:8000");
});



const express=require('express');
const dbConnection=require('./mongodb');

const app=express();
// request method we can use when we wnat get data from database with help of postman
//respone Method jevala aapala serve manaje node js serve reply karela  API la

app.use(express.json());

app.get('/',async (req,resp)=>{
   //console.log("This is ketan");
   let data = await dbConnection();
    let result=await data.find().toArray();
   // console.log(result);
    resp.send(result);
});
app.post('/',(req,resp)=>{


   console.log(req.body)
   // resp.send({name:'anil'})
})
app.listen(5000);
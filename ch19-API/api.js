const express=require('express');
const dbConnection=require('./mongodb');
const mongoDB=require('mongodb');

const app=express();
// request method we can use when we wnat get data from database with help of postman
//respone Method jevala aapala serve manaje node js serve reply karela  API la

app.use(express.json());

app.get('/',async (req,resp)=>{
   //console.log("This is ketan");
   let data = await dbConnection();
    let result=await data.find().toArray();
   // console.log(result);
    //resp.send(result);
});
app.post('/', async (req,resp)=>{
   //console.log(req.body)
   let data=  await dbConnection();
  let result=await data.insertOne(req.body); // inset method retuns the promises 
 console.log(result);
resp.send(result)
})

app.put('/:name', async(req,resp)=>{
let data= await dbConnection();
let result=data.updateOne(
   {name:req.params.name},
   {$set:req.body}
)  
resp.send({result:"updated"})  // there are two object first is condition and second is code


})

app.delete("/:id",async (req,resp)=>{
  // console.log(req.params.id)
   let data=  await dbConnection();
   let result= await data.deleteOne({
      _id:new mongoDB.ObjectId(req.params.id)

   })
   resp.send(result);
})
app.listen(5000);       
const dbConnection  = require('./mongodb');
//console.log(dbConnection());
/*dbConnection().then((resp)=>{
 resp.find().toArray().then((data)=>{
    console.log(data);
 })
})*/

const main= async()=>{
    const data= await dbConnection();
    const result=await data.find().toArray();
    console.log(result);
}
main();


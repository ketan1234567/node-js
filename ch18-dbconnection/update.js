const dbConnection =require('./mongodb');



const UpdateData= async ()=>{
   const db=await dbConnection();
   const result=await  db.updateOne(
    {name:'kirti'},{
        $set:{name:'yash'}
    }
   );
   if(result.acknowledged){
    console.log("Update Data Successfully");
   }

}
UpdateData();
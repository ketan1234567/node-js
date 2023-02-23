const dbConnection=require('./mongodb');



const insert= async ()=>{
  const db= await dbConnection();
  const result= await db.insertMany(
    [
        {name:'saroj',roll_no:89},
        {name:'anil',roll_no:90},
        {name:'ketan',roll_no:91},
        {name:'kirti',roll_no:92}

]
  );
console.log(result.acknowledged);
if(result.acknowledged){
    console.log("Data Inserted");
}

}
insert();
const dbConnection=require('./mongodb');
const deleteData= async ()=>{
    const db= await dbConnection();
    const result=await db.deleteOne({
        name:'yash'
    });
    if(result.acknowledged){
        console.log("delete record");
    }
}
deleteData();
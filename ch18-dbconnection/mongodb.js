const { MongoClient } = require('mongodb');
const url='mongodb://localhost:27017';
const client=new MongoClient(url);

 async function dbConnection()   
 {
    const client = await MongoClient.connect('mongodb://127.0.0.1:27017'); // This function return promises
    let database = client.db('schooldb');
     return database.collection('student');
 }
 module.exports=dbConnection;
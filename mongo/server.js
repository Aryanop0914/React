const {MongoClient}=require('mongodb');
const databaseNAme='e-comm';
// const MongoClient=require('mongodb').MongoClient;
const url='mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

 async function getData()
{
    let result= await client.connect();
    let db=result.db(databaseNAme);
    let collection=db.collection('products');
    let response= await collection.find().toArray();
    console.log(response);
}

getData();
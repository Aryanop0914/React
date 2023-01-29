const {MongoClient}=require('mongodb');
const databaseName='e-comm';
const url='mongodb+srv://Aryan0914:hetal1977@sgp.pfvb50a.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(url);

 async function getData()
{
    let result=await client.connect();
    let db=result.db(databaseName);
    let collection=db.collection('products');
    let response= await collection.find().toArray();
    console.log(response);
}

getData();
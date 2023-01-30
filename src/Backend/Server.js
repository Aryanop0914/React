// const mongoose = require('mongoose');
// const express = require('express');
// const app=express();
// const DBurl='mongo db+srv://Aryan0914:hetal1977@sgp.pfvb50a.mongodb.net/?retryWrites=true&w=majority';

// mongoose.connect(DBurl,{
//     useNewUrlParser:true,
//     useCreateIndex:true,
//     useUnifiedTopology:true,
//     useFindAndModify:false
// }).then(()=>{
//     console.log('Connection Successful');
// }).catch((err)=>console.log('no connection',err));
const {MongoClient}=require('mongodb');
const url='mongodb+srv://Aryan0914:hetal1977@sgp.pfvb50a.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(url);
const express = require('express');
const { router } = require('express');
const app=express();

 async function getData()
{
     await client.connect().then(()=>{
            console.log('Connection Successful');
        }).catch((err)=>console.log('no connection',err));

}

getData();

app.listen(4000,()=>console.log(`Listening On Port 4000.`));
app.get('/', function(req, res) {
    res.send("helo")
  });

router.post('/register',async (req,res)=>{
    const{username1,email1,password1,cpassword1}=req.body;
    if(!username1 || !email1|| !password1|| !cpassword1 ){
        return res.status(422).json({error:"Plz fill the field properly"});
    }

    try{

        const userExist = await User.FindOne({email1:email1});
        if(userExist){
            return res.status(422).json({error:"Email already Exist"});
        }

        const user = new User({username1,email1,password1,cpassword1});
        await user.save();

        res.status(201).json({message:"User Registration Succesfull"});
    }catch(err){
        console.log(err);
    }
});


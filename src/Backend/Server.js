const express = require ("express");
const app = express();
const mongoose=require("mongoose");
app.use(express.json());
const cors=require("cors");
app.use(cors());

const dbUrl="mongodb+srv://Aryan0914:hetal1977@sgp.bwk5tqf.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(dbUrl,{
    useNewUrlParser:true,
}).then(()=>{
    console.log("Connected to Database");
}).catch((e)=>console.log(e));

require("./userDetails");
const User=mongoose.model("Userinfo");
app.post("/register",async(req,res)=>{
    const{username1,email1,password1,cpassword1}=req.body;
    try{
        await User.create({
            username1,
            email1,
            password1,
            cpassword1,
        });
        res.send({status:"ok"});

    }catch(err){
        res.send({status:"err"});
    }
})



app.listen(5000,() => {
    console.log("Server Started");
    console.log("Listening on 5000");
});


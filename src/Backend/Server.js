const express = require ("express");
const app = express();
const mongoose=require("mongoose");
app.use(express.json());
const cors=require("cors");
app.use(cors());
const bcrypt=require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "gueiuguxfgvyglou388o4i3shgkjdrhgiur36^&(*&hkzdghfta8767w348&^&gaegyuersfgrh4h8468785686%^$$%@*&#(";

const dbUrl="mongodb+srv://Aryan0914:hetal1977@sgp.bwk5tqf.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(dbUrl,{
    useNewUrlParser:true,
}).then(()=>{
    console.log("Connected to Database");
}).catch((e)=>console.log(e));

require("./userDetails");
const User=mongoose.model("Userinfo");
app.post("/register",async(req,res)=>{
    const{username,email,password}=req.body;
    const encyptedPassword = await bcrypt.hash(password,10);
    try{
        const oldUser= await User.findOne({email});
        if(oldUser){
           return res.json({error:"User Exists"});
        }
        await User.create({
            username,
            email,
            password:encyptedPassword,
        });
        res.send({status:"ok"});
    }  catch(err){
        console.log(err);
        res.send({status:"error"});
    }
})

app.post("/login",async(req,res)=>{
    const {email,password} = req.body;
    const user = await User.findOne({email});
    if(!user){
    return res.json({error:"User Not Found"});   
    }
    if(await bcrypt.compare(password,user.password)){
        const token = jwt.sign({ email: user.email }, JWT_SECRET, {
            expiresIn: "150m",
          });
        if(res.status(201)){
            return res.json({status:"ok" , data:token});
        }else{
            return res.json({status:"error" , error:"Invalid password"});
        }
    }
    res.send({status:"error"})
});




app.listen(5000,() => {
    console.log("Server Started");
    console.log("Listening on 5000");
});


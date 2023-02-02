const express = require ("express");
const app = express();
const mongoose=require("mongoose");
app.use(express.json());
const cors=require("cors");
app.use(cors());
const bcrypt=require("bcryptjs");
const   jwt = require("jsonwebtoken");
const JWT_SECRET = "aduygfdgfrgfg[]rt]h[j35734tuiergoiue4t/][5y=y8474842hrksejfh/dfeff4548971easf659e"

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
    const {email1 , password} = req.body;
    const user = await User.findOne({ email1 });
    if(!user){
    return res.json({error:"User Not Found"});   
    }
    if(await bcrypt.compare(password,user.password)){
        const token = jwt.sign({ email: user.email }, JWT_SECRET, {
            expiresIn: "15m",
          });
        if(res.status(201)){
            return res.json({status:"ok" , data:token});
        }else{
            return res.json({status:"error" , error:"Invalid password"});
        }
    }
    res.send({status:"error"})
});

app.post("/userData", async(req,res)=>{
    const {token} = req.body;
    try{
     const user =jwt.verify(token,JWT_SECRET);
     const useremail = user.email;
     User.findOne({email:useremail}).then((data)=>{
            res.send({ status:"ok",data:data});
     }).catch((error)=>{
        res.send({ status:"error" , data:error});

     });
   }catch(er){}
})



app.listen(5000,() => {
    console.log("Server Started");
    console.log("Listening on 5000");
});


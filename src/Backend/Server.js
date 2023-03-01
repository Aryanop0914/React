const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json({limit: '25mb'}));
const cors = require("cors");
app.use(cors());
const bcrypt = require("bcryptjs");
app.set("view engine","ejs");
app.use(express.urlencoded({extended:false,limit: '25mb'}));
const jwt = require("jsonwebtoken");
const JWT_SECRET = "hvdvay6ert72839289()aiyg8t87qt72393293883uhefiuh78ttq3ifi78272jbkj?[]]pou89ywe";

const mongoUrl =
<<<<<<< HEAD
  "mongodb+srv://Aryan:hetal1977@db.brvlcjn.mongodb.net/?retryWrites=true&w=majority";
=======
  "mongodb+srv://Aryan:hetal1977db.brvlcjn.mongodb.net/test";
>>>>>>> 3352a62f23ee47ee8a4b563c51d9cb7b2c072a90

  mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((e) => console.log(e));

require("./userDetails");

const User = mongoose.model("UserInfo");
app.post("/signup", async (req, res) => {
  const { username, email, password} = req.body;

  const encryptedPassword = await bcrypt.hash(password, 10);
  try {
    const oldUser = await User.findOne({ email });

    if (oldUser) {
      return res.json({ error: "User Exists" });
    }
    await User.create({
      username,
      email,
      password: encryptedPassword,
    });
    res.send({ status: "Successful Registration" });
  } catch (error) {
    console.log(err);
    res.send({ status: "error" });
  }
});
let email1;
app.post("/login", async (req, res) => {
  email1=req.body.email;
  const { email, password } = req.body;
  
  const user = await User.findOne({ email });
  if (!user) {
    return res.json({ error: "User Not found" });
  }
  if (await bcrypt.compare(password, user.password)) {
    const token = jwt.sign({ email: user.email }, JWT_SECRET, {
      expiresIn: "2days",
    });

    if (res.status(201)) {
      return res.json({ status: "Login successful", data: token });
    } else {
      return res.json({ error: "error" });
    }
  }
  res.json({ status: "perror", error: "Invalid Password" });
});

app.post("/userData", async (req, res) => {
  const { token } = req.body;
  try {
    const user = jwt.verify(token, JWT_SECRET, (err, res) => {
      if (err) {
        return "token expired";
      }
      return res;
    });
    if (user == "token expired") {
      return res.send({ status: "error", data: "token expired" });
    }

    const useremail = user.email;
    User.findOne({ email: useremail })
      .then((data) => {
        res.send({ status: "ok", data: data });
      })
      .catch((error) => {
        res.send({ status: "error", data: error });
      });
  } catch (error) {}
});

require("./ownerDetails");
const Ownerde = mongoose.model("OwnerInfo");
app.post("/owner",async(req,res)=>{
  const {title,location,base64,guest,rooms} = req.body;
  try{
      Ownerde.create({
        title,
        location,
        image:base64,
        guest,
        rooms,
        email:email1,

      });
      res.send({Status:"Done"});
  }catch(error){
      res.send({Status:"error",data:error});
  } 
});

<<<<<<< HEAD
app.post("/ownerdata", async (req, res) => {
  const {token} = req.body;
  try {
    const owner = jwt.verify(token, JWT_SECRET, (err, res) => {
=======
// app.get("/ownerdata", async (req, res) => {

//   try {

//     await Ownerde.find({}).then(data=>{
//       res.send({status:"ok",data:data})
//     })
//   }catch(error){
//     console.log(error);    
//   }
// });

app.post("/ownerdata", async(req,res)=>{
  const { token } = req.body;
  try {
    const user = jwt.verify(token, JWT_SECRET, (err, res) => {
>>>>>>> 3352a62f23ee47ee8a4b563c51d9cb7b2c072a90
      if (err) {
        return "token expired";
      }
      return res;
    });
<<<<<<< HEAD
    if (owner == "token expired") {
      return res.send({ status: "error", data: "token expired" });
    }
    const owneremail = owner.email;
    await Ownerde.find({ email: owneremail}).then(data=>{
      res.send({status:"ok",data:data})
    })
  }catch(error){
    console.log(error);  
  }

=======
    if (user == "token expired") {
      return res.send({ status: "error", data: "token expired" });
    }
    if(user){
    try {

      await Ownerde.find({}).then(data=>{
        res.send({status:"ok",data:data})
      })
    }catch(error){
      console.log(error);  
    }
}
}catch(err){console.log(err);}
>>>>>>> 3352a62f23ee47ee8a4b563c51d9cb7b2c072a90
});


app.listen(5000,() => {
    console.log("Server Started");
    console.log("Listening on 5000");
});


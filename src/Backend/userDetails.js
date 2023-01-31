const mongoose=require("mongoose");

const UserDetailsSchema = new mongoose.Schema({
    username1: String,
    email1: String,
    password1:String,
    cpassword1:String,
},{
    collection: "Userinfo",
}

);

mongoose.model("Userinfo",UserDetailsSchema);

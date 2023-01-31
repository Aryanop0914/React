const mongoose=require("mongoose");

const UserDetailsSchema = new mongoose.Schema({
    username: String,
    email: {type:String, unique:true},
    password:String,
},{
    collection: "Userinfo",
}

);

mongoose.model("Userinfo",UserDetailsSchema);

const mongoose= require("mongoose");

const UserDetailsSchema = new mongoose.Schema({
    username: String,
    email: {type:String, unique:true},
    password:String,
},{
    collection: "Userinfo",
}
);
mongoose.model("Userinfo",UserDetailsSchema);

const OwnersSchema = new mongoose.Schema({
    title: String,
    location: String,
    images:{
        data:Buffer,
        contentType:String
    },
    guest:String,
    rooms:String,
},{
    collection: "Ownerinfo",
}
);
mongoose.model("Ownerinfo",OwnersSchema);
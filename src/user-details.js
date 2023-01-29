const mongoose = require("mongoose");

const UserDetailsScehma = new mongoose.Schema(
  {
    username1: String,
    email1: { type: String, unique: true },
    password1: String,
    cpassword1: String,
  },
  {
    collection: "UserInfo",
  }
);

mongoose.model("UserInfo", UserDetailsScehma);
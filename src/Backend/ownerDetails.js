const mongoose = require("mongoose");

const OwnerDetailsScehma = new mongoose.Schema(
  {
    title:String,
    location:String,
    image:String,
    guest:String,
    rooms:String,
  },
  {
    collection: "OwnerInfo",
  }
);

mongoose.model("OwnerInfo", OwnerDetailsScehma);
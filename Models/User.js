const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  email: { type: String, required: true, unique:true },
  name: { type: String, required: true },
  user_img: { type: String,},
  password: { type: String, required: true },
  country: { type: String },
});

module.exports = mongoose.model("users", UserSchema);
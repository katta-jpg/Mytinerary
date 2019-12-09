const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  email: { type: String, required: true, unique: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  profilePic: { type: String },
  password: { type: String, required: true },
  country: { type: String }
});

module.exports = mongoose.model("users", UserSchema);

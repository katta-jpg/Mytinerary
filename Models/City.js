const mongoose = require("mongoose");
const { Schema } = mongoose;

const CitySchema = new Schema({
  country: { type: String, required: true },
  city: { type: String, required: true },
  img: { type: String }
});
module.exports = mongoose.model("cities", CitySchema);

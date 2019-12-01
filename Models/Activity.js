const mongoose = require("mongoose");
const { Schema } = mongoose;

const ActivitySchema = new Schema({
  itineraryId: { type: String, required: true },
  name: { type: String, required: true },
  activity_img: { type: String, required: true }
});

module.exports = mongoose.model("activities", ActivitySchema);

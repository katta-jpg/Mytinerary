const mongoose = require("mongoose");
const { Schema } = mongoose;

const ItinerarySchema = new Schema({
  title: { type: String, required: true },
  profilePic: { type: String, required: true },
  username: { type: String, required: true },
  rating: { type: String },
  duration: { type: String, required: true },
  price: { type: String, required: true },
  hashtag: { type: Array },
  city: { type: String, required: true }
});

module.exports = mongoose.model("itinerarys", ItinerarySchema);

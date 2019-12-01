const mongoose = require("mongoose");
const config = require("config");

const URI = config.get("MongoURI");

mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(db => console.log("DB is Online"));

module.exports = mongoose;

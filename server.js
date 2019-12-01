const express = require("express");
const app = express();
const morgan = require("morgan");
const path = require("path");
const { mongoose } = require("./database");
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

app.use("/api/cities", require("./routes/Cities"));
app.use("/activities", require("./routes/Activities"));
app.use("/api/users", require("./Routes/UsersRegistry"))
app.use("/itinerary", require("./routes/Itinerarys"));
app.use("/api/auth", require("./Routes/UserLogin"))
app.use(express.static(path.join(__dirname, "mytinerary-client", "public")));
app.listen(port);
console.log("Magic happens on port " + port);

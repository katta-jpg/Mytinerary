const express = require("express");
const app = express();
const morgan = require("morgan");
const path = require("path");
const { mongoose } = require("./database");
const cors = require("cors");
const passport = require("passport");
const port = process.env.PORT || 5000;

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

//passport configuration
require("./passport")(passport);

//passport middleware
app.use(passport.initialize());
app.use(passport.session());

app.use("/api/cities", require("./routes/Cities"));
app.use("/activities", require("./routes/Activities"));
app.use("/api/auth/google", require("./routes/Google"));
app.use("/api/registry", require("./Routes/UsersRegistry"));
app.use("/itinerary", require("./routes/Itinerarys"));
app.use("/api/login", require("./Routes/UserLogin"));
app.use(express.static(path.join(__dirname, "mytinerary-client", "public")));
app.listen(port);
console.log("Magic happens on port " + port);

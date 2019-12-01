const express = require("express");
const router = express.Router();

const ActivitySchema = require("../models/Activity");

router.get("/", async (req, res) => {
  const Activity = await ActivitySchema.find();
  res.json(Activity);
});

router.post("/", async (req, res) => {
  const activity = req.body;
  const activityCreated = await ActivitySchema.create(activity);
  res.json(activityCreated);
});

router.get("/:itinerary", async (req, res) => {
  const itinerary = req.params.itinerary;
  const Activity = await ActivitySchema.find({ itineraryId: itinerary });
  res.json(Activity);
});

module.exports = router;

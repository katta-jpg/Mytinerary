const express = require("express");
const router = express.Router();

const ItinerarySchema = require("../models/Itinerary");

router.get("/", async (req, res) => {
  const Itinerary = await ItinerarySchema.find();
  res.json(Itinerary);
});

router.post("/", async (req, res) => {
  const itinerary = req.body;
  const itineraryCreated = await ItinerarySchema.create(itinerary);
  res.json(itineraryCreated);
});

router.get("/:city", async (req, res) => {
  const city = req.params.city;
  const Itinerary = await ItinerarySchema.find({ city });
  res.json(Itinerary);
});

module.exports = router;

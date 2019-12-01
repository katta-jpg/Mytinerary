const express = require("express");
const router = express.Router();

const CitySchema = require("../models/City");

router.get("/", async (req, res) => {
  const City = await CitySchema.find();
  res.json(City);
});

router.post("/", async (req, res) => {
  const city = req.body;
  const cityCreated = await CitySchema.create(city);
  res.json(cityCreated);
});

module.exports = router;

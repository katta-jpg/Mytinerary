const express = require("express");
const router = express.Router();
const config = require("config");
const passport = require("passport");
const jwt = require("jsonwebtoken");

require("../GoogleStrat");

router.get(
  "/",
  passport.authenticate("google", { scope: ["profile", "email"] }),
  async (req, res, next) => {}
);
router.get(
  "/callback",
  passport.authenticate("google", {
    failureRedirect: "/login",
    session: false
  }),
  async (req, res) => {
    const { _id, firstname, lastname, email, profilePic } = req.user;
    const payload = {
      _id
    };
    jwt.sign(payload, config.get("JWTsecret"), (err, token) => {
      if (err) throw err;
      res.redirect(`http://localhost:3000/loadwithgoogle/${token}`).json({
        token,
        user: {
          firstname,
          lastname,
          email,
          profilePic
        }
      });
    });
  }
);
module.exports = router;

const express = require("express");
const router = express.Router();
const UserSchema = require("../Models/User");
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const passport = require("passport");

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    UserSchema
      .findById(req.user.id)
      .then(user => {
        res.json(user);
      })
      .catch(err => res.status(404).json({ error: "User does not exist!" }));
  }
);

router.post("/", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ msg: "Enter the Required Fields" });
  }

  const oldUser = await UserSchema.findOne({ email });
  if (!oldUser) return res.status(400).json({ msg: "User does NOT exist." });

  const isMatch = await bcrypt.compare(password, oldUser.password)
  if (!isMatch) return res.status(400).json({ msg: "Credentials are NOT valid." });

  jwt.sign(
    { id: oldUser.id },
    config.get("JWTsecret"),
    { expiresIn: 3600 * 24 },
    (err, token) => {
      if (err) throw err;
      res.json({
        token,
        user:
        {
          name: oldUser.name,
          email: oldUser.email
        }
      })
    });
});

module.exports = router;

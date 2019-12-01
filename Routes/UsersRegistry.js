const express = require("express");
const router = express.Router();
const UserSchema = require("../Models/User");
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");


router.post("/", async (req, res) => {
  const { name, email, password, user_img, country } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ msg: "Enter the Required Fields" });
  }

  const oldUser = await UserSchema.findOne({ email });
  if (oldUser) return res.status(400).json({ msg: "User Already Exist" });

  const newUser = new UserSchema({
    name,
    email,
    password,
    user_img,
    country
  });

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, async (err, hash) => {
      if (err) throw err;
      newUser.password = hash;
      await UserSchema.create(newUser);

        jwt.sign(
            { id: newUser.id },
            config.get("JWTsecret"),
            { expiresIn: 3600*24 },
            (err,token) => {
                if(err) throw err;
                res.json({
                    token,
                    name,
                    email,
                    user_img,
                    country
            }
        )
      });
    });
  });
});
module.exports = router;
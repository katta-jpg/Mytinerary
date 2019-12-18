const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const UserSchema = require("./Models/User");
const config = require("config");
const passport = require("passport");
const key = require("./config/default");

const props = {};
props.clientID = key.client_id;
props.clientSecret = key.googleSecret;
props.callbackURL = "http://localhost:5000/api/auth/google/callback";
props.proxy = true;
props.passReqToCallback = true;

async function findOrCreate(profile) {
  const { sub, given_name, family_name, picture, email } = profile._json;
  const UserExist = await UserSchema.findOne({ email });
  if (UserExist) {
    return UserExist;
  }
  try {
    const newUserWithGoogle = await UserSchema.create({
      googleId: sub,
      email,
      firstname: given_name,
      lastname: family_name,
      profilePic: picture,
      password: sub
    });
    return newUserWithGoogle;
  } catch (err) {
    return err;
  }
}
passport.use(
  new GoogleStrategy(
    {
      clientID: key.client_id,
      clientSecret: key.googleSecret,
      callbackURL: "http://localhost:5000/api/auth/google/callback"
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const User = await findOrCreate(profile);
        return done(null, User);
      } catch (err) {
        return done(err, null);
      }
    }
  )
);

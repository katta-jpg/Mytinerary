const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");
const UserSchema = require("./Models/User");
const key = require("./config/default");
const passport = require("passport");
const config = require("config");

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = key.JWTsecret;

async function createUser({
  firstName,
  lastName,
  email,
  password,
  providerId,
  provider
}) {
  return new Promise(async (resolve, reject) => {
    const user = await UserSchema.findOne({ email });

    if (user) {
      reject("Email is already in use");
    }

    resolve(
      await UserSchema.create({
        googleId,
        provider,
        firstname,
        lastname,
        email,
        password
      })
    );
  });
}

module.exports = function(passport) {
  passport.use(
    new JwtStrategy(opts, async (jwt_payload, done) => {
      const User = await UserSchema.findById(jwt_payload.id);
      if (User) return done(null, User);
      return done(null, false);
    })
  );
};

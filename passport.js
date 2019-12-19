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
  firstname,
  lastname,
  email,
  password,
  googleId,
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
      if (!jwt_payload.googleId) {
        const User = await UserSchema.findById(jwt_payload.id);
        if (User) return done(null, User);
        return done(null, false);
      } else {
        const User = await UserSchema.find({ googleId: jwt_payload.googleId });
        if (User) return done(null, User[0]);
        return done(null, false);
      }
    })
  );
};

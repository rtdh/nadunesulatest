const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');
const User = mongoose.model('User');
const keys = require('../config/keys');

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secret;

module.exports = passport => {
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      //Your logic here
      User.findById(jwt_payload.id)
        .then(user=>{
            if(user){
                //console.log(user)
                return done(null, user)
            }
            return done(null, false)
        })
        .catch(error=>{
            console.log(error)
        })
    })
  );
};
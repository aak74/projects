const lodash = require('lodash');
const passportJWT = require('passport-jwt');

const ExtractJwt = passportJWT.ExtractJwt;
const JwtStrategy = passportJWT.Strategy;
const users = [{
  id: 1,
  name: 'admin',
  password: 'admin',
}];
const jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
jwtOptions.secretOrKey = 'ArealJWTkey';
const verifyKey = 'ArealGroup'


const strategy = new JwtStrategy(jwtOptions, ((jwt_payload, next) => {
  // usually this would be a database call:
  if (jwt_payload.verifyKey === verifyKey) {
    next(null, jwt_payload);
  } else {
    next(null, false);
  }
}));

module.exports = strategy;
module.exports.verifyKey = verifyKey;
module.exports.jwtOptions = jwtOptions;
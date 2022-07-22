const jwt = require('jsonwebtoken');

const maxAge = 3 * 24 * 60 * 60;

module.exports.createToken = (userData)=>{
  return jwt.sign(userData, process.env.SECRET_KEY, {
    expiresIn: maxAge
  });
}

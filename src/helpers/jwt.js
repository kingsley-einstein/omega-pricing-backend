const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../env");

module.exports = {
  tokenize(payload) {
    return jwt.sign(payload, jwtSecret, {
      expiresIn: '3d'
    });
  },
  decode(token) {
    return jwt.decode(token);
  }
};

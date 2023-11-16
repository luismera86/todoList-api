const jwt = require("jsonwebtoken");

const generateToken = (payload) => {
  const token = jwt.sign(payload, "secret", { expiresIn: "1h" });
  return token;
};

module.exports = generateToken;

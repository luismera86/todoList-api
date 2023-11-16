const jwt = require("jsonwebtoken");

const verifyToken = (req, res, nex) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(403).json({ error: "Token not found" });
  }

  jwt.sign(token, "secret", (err, decode) => {
    if (err) {
      return res.status(401).json({ message: "Invalid token" });
    }
    req.token = decode;

    nex();
  });
};

module.exports = verifyToken;

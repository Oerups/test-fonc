const jwt = require("jsonwebtoken");

const jwtService = {
  _decodeToken: (token) => {
    return jwt.verify(token, process.env.RANDOM_TOKEN_SECRET);
  },

  getUserFromAuthorization: (authorization) => {
    const token = authorization.split(" ")[1];
    const decoded = jwtService._decodeToken(token);
    return decoded;
  },

  generateToken: (user) => {
    const token = jwt.sign(
      {
        id: user.id,
        role: user.role,
      },
      process.env.RANDOM_TOKEN_SECRET,
      { expiresIn: "24h" }
    );
    return token;
  },
};

module.exports = jwtService;

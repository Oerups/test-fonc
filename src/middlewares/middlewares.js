const jwtService = require("../services/jwt.service");

const middlewares = {
  isAuthenticated: async (req, res, next) => {
    const user = await jwtService._decodeToken(
      req.headers.authorization ?? null
    );

    if (user) {
      req.user = user;
      next();
    } else {
      res.status(401).json({ error: "Non authorisé" });
    }
  },
};

module.exports = middlewares;

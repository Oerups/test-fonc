const jwtService = require("../services/jwt.service");
const userService = require("../services/user.service");
const authService = require("../services/auth.service");

const authController = {
  login: async (req, res, next) => {
    try {
      const { email } = req.body;
      const user = await userService.findBy("email", email);

      const token = jwtService.generateToken(user);
      const decodedToken = jwtService._decodeToken(token);

      res
        .status(200)
        .json({ token: token, tokenExp: decodedToken.exp, role: user.role });
    } catch (error) {
      next(error);
    }
  },

  register: async (req, res, next) => {
    try {
      await userService.create(req.body);

      res.status(201).json("L'utilisateur a été créé");
    } catch (error) {
      next(error);
    }
  },
};

module.exports = authController;

const bcrypt = require("bcryptjs");

const authService = {
  _hashPassword: async (password) => {
    return await bcrypt.hash(password, 10);
  },
};

module.exports = authService;

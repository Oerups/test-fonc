const User = require("../models/user.model");

const userService = {
  all: async () => {
    return await User.find({});
  },

  // Get user by id
  findById: async (id) => {
    return await User.findById(id);
  },

  findBy: async (key, value) => {
    return await User.findOne({ [key]: value });
  },

  // Update user by id
  update: async (id, data) => {
    return await User.findByIdAndUpdate(id, data, { new: true });
  },

  // Delete user by id
  delete: async (id) => {
    return await User.findByIdAndDelete(id);
  },

  create: async (data) => {
    const hashedPassword = await authService._hashPassword(data.password);
    data.password = hashedPassword;

    return await User.create(data);
  },
};

module.exports = userService;

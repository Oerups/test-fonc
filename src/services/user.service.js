const User = require("../models/user.model");

const userService = {
    all: async () => {
        return await User.find({});
    },

    allWhithoutUser: async (userId) => {
        return await User.find({_id: {$ne: userId}});
    },

    countAll: async () => {
        return await User.countDocuments();
    },

    // Get user by id
    findById: async (id) => {
        return await User.findById(id);
    },

    findBy: async (key, value) => {
        return await User.findOne({[key]: value});
    },

    // Update user by id
    update: async (id, data) => {
        return await User.findByIdAndUpdate(id, data, {new: true});
    },

    // Delete user by id
    delete: async (id) => {
        return await User.findByIdAndDelete(id);
    },

    create: async (data) => {
        return await User.create(data);
    },
};

module.exports = userService;

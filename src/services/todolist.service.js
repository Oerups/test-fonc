const Todolist = require("../models/todolist.model");

const todolistService = {
    all: async () => {
        return await Todolist.find({});
    },

    // Get Todolist by id
    findById: async (id) => {
        return await Todolist.findById(id);
    },

    findBy: async (key, value) => {
        return await Todolist.findOne({[key]: value});
    },

    // Update Todolist by id
    update: async (id, data) => {
        return await Todolist.findByIdAndUpdate(id, data, {new: true});
    },

    // Delete Todolist by id
    delete: async (id) => {
        return await Todolist.findByIdAndDelete(id);
    },

    create: async (data) => {
        return await Todolist.create(data);
    },
};

module.exports = todolistService;

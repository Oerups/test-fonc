const Todolist = require("../models/todolist.model");

const taskService = {
    create: async (todolistId, task) => {
        return await Todolist.findOneAndUpdate(
            { _id: todolistId },
            { $push: { tasks: task } },
            { new: true }
        );
    },

    update: async (todolistId, taskId, task) => {
        return await Todolist.findOneAndUpdate(
            { _id: todolistId, "tasks._id": taskId },
            { $set: { "tasks.$": task } },
            { new: true }
        );
    },

    // NOT REWORKED

    delete: async (todolist, taskId) => {
        const tasks = todolist.tasks;
        const taskIndex = tasks.findIndex(
            (task) => task._id.toString() === taskId
        );
        tasks.splice(taskIndex, 1);

        const updatedTodolist = await Todolist.findByIdAndUpdate(
            todolist._id,
            {
                tasks: tasks,
            },
            { new: true }
        );

        return updatedTodolist;
    },

    find: async (todolist, taskId) => {
        const tasks = todolist.tasks;
        const taskIndex = tasks.findIndex(
            (task) => task._id.toString() === taskId
        );
        const task = tasks[taskIndex];

        return task;
    },
};

module.exports = taskService;

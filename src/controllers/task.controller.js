const taskService = require("../services/task.service");
const todolistService = require("../services/todolist.service");

const taskController = {
    create: async (req, res, next) => {
        try {
            return res.status(201).json(
                await taskService.create(req.todolist, req.body)
            );
        } catch (error) {
            next(error);
        }
    },

    update: async (req, res, next) => {
        try {
            const { todolist, task } = req;

            return res.status(200).json(
                await taskService.update(todolist, task, req.body)
            );
        } catch (error) {
            next(error);
        }
    },

    delete: async (req, res, next) => {
        try {
            const { todolist_id, task_id } = req.params;

            const todolist = await todolistService.findById(
                todolist_id,
            );
            if (!todolist) {
                return res.status(404).json({ message: "todolist not found" });
            }

            const task = await taskService.delete(todolist, task_id);
            if (!task) {
                return res.status(404).json({ message: "task not found" });
            }

            return res.status(200).json(task);
        } catch (error) {
            next(error);
        }
    },

    find: async (req, res, next) => {
        try {
            const { todolist_id, task_id } = req.params;

            const todolist = await todolistService.findById(
                todolist_id,
            );
            if (!todolist) {
                return res.status(404).json({ message: "todolist not found" });
            }

            const task = await taskService.find(todolist, task_id);
            if (!task) {
                return res.status(404).json({ message: "task not found" });
            }

            return res.status(200).json(task);
        } catch (error) {
            next(error);
        }
    },
};

module.exports = taskController;

const todolistService = require("../services/todolist.service");

const todolistController = {
    // Get all todolists
    findAllTodolists: async (req, res, next) => {
        try {
            const todolists = await todolistService.findAllByUserId(req.user.id);

            res.status(200).json(todolists);
        } catch (error) {
            next(error);
        }
    },

    // Get todolists by id
    findTodolistById: async (req, res, next) => {
        try {
            const todolist = await todolistService.findByIdAndUserId(req.params.id, req.user.id);

            if (!todolist) {
                return res.status(404).json({
                    message: "todolist not found",
                });
            }

            res.status(200).json(todolist);
        } catch (error) {
            next(error);
        }
    },

    createTodolist: async (req, res, next) => {
        try {
            req.body.user_id = req.user.id;
            const todolist = await todolistService.create(req.body);

            res.status(201).json(todolist);
        } catch (error) {
            next(error);
        }
    },

    // Update todolists by id
    updateTodolist: async (req, res, next) => {
        try {
            const todolist = await todolistService.update(req.params.id, req.body);

            if (!todolist) {
                return res.status(404).json({
                    message: "todolist not found",
                });
            }

            res.status(200).json(todolist);
        } catch (error) {
            next(error);
        }
    },

    // Delete todolists by id
    deleteTodolist: async (req, res, next) => {
        try {
            await todolistService.delete(req.params.id);

            res.status(201).json({
                message: "todolist deleted",
            });
        } catch (error) {
            next(error);
        }
    },
};

module.exports = todolistController;

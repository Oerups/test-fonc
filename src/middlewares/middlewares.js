const jwtService = require("../services/jwt.service");
const todolistService = require('../services/todolist.service');

const middlewares = {
    isAuthenticated: async (req, res, next) => {
        const user = await jwtService._decodeToken(req.headers.authorization ?? null);

        if (user) {
            req.user = user;
            next();
        } else {
            res.status(401).json({ error: "Non authorisé" });
        }
    },
    isOwned: async (req, res, next) => {
        const { todolist_id } = req.params;
        const { id } = req.user;
        const todolist = await todolistService.findByIdAndUserId(todolist_id, id);

        if (!todolist) {
            return res.status(404).json({ message: "Todolist not found" });
        }

        req.todolist = todolist;
        next();
    },
};

module.exports = middlewares;

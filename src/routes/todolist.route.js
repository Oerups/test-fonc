const express = require("express");
const router = express.Router();
const todolistController = require("../controllers/todolist.controller");
const middlewares = require("../middlewares/middlewares");

router.get("/", todolistController.all);
router.get(
    "/:id",
    [middlewares.isAuthenticated],
    todolistController.findTodolistById
);
router.post("/", todolistController.createTodolist);
router.patch("/:id", todolistController.updateTodolist);
router.delete(
    "/:id",
    [middlewares.isAuthenticated, middlewares.isOwned],
    todolistController.deleteTodolist
);

module.exports = router;

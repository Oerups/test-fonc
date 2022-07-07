const express = require("express");
const router = express.Router();
const todolistController = require("../controllers/todolist.controller");
const middlewares = require("../middlewares/middlewares");

router.get("/", [middlewares.isAuthenticated], todolistController.findAllTodolists);
router.get("/:id", [middlewares.isAuthenticated], todolistController.findTodolistById);
router.post("/", [middlewares.isAuthenticated], todolistController.createTodolist);
router.patch("/:id", [middlewares.isAuthenticated, middlewares.isOwned], todolistController.updateTodolist);
router.delete("/:id", [middlewares.isAuthenticated, middlewares.isOwned], todolistController.deleteTodolist);

module.exports = router;

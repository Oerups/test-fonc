const express = require("express");
const router = express.Router();
const todolistController = require("../controllers/todolist.controller");
const middlewares = require("../middlewares");

router.get(
  "/",
  [middlewares.isAuthenticated],
  todolistController.findAllTodolists
);
router.get(
  "/:id",
  [middlewares.isAuthenticated],
  todolistController.findTodolistById
);
router.post(
  "/",
  [middlewares.isAuthenticated],
  todolistController.createTodolist
);
router.patch(
  "/:id",
  [middlewares.isAuthenticated],
  todolistController.updateTodolist
);
router.delete(
  "/:id",
  [middlewares.isAuthenticated],
  todolistController.deleteTodolist
);

module.exports = router;

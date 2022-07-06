const express = require("express");
const router = express.Router();
const todolistController = require("../controllers/todolist.controller");

router.get("/", todolistController.findAllTodolists);
router.get("/:id", todolistController.findTodolistById);
router.post("/", todolistController.createTodolist);
router.patch("/:id",todolistController.updateTodolist);
router.delete("/:id", todolistController.deleteTodolist);

module.exports = router;

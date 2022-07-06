const express = require("express");
const taskController = require("../controllers/task.controller");
const middlewares = require("../middlewares");

const router = express.Router();

router.post(
  "/todolist/:todolist_id/task",
  [middlewares.isAuthenticated],
  taskController.create
);
router.get(
  "/todolist/:todolist_id/:task_id",
  [middlewares.isAuthenticated],
  taskController.find
);
router.patch(
  "/todolist/:todolist_id/task/:task_id",
  [middlewares.isAuthenticated],
  taskController.update
);
router.delete(
  "/todolist/:todolist_id/task/:task_id",
  [middlewares.isAuthenticated],
  taskController.delete
);

module.exports = router;

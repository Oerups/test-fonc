const express = require("express");
const taskController = require("../controllers/task.controller");
const middlewares = require("../middlewares/middlewares");

const router = express.Router();

router.post("/todolist/:todolist_id/task", [middlewares.isAuthenticated, middlewares.isOwned], taskController.create);
router.get("/todolist/:todolist_id/:task_id", [middlewares.isAuthenticated, middlewares.isOwned], taskController.find);
router.patch("/todolist/:todolist_id/task/:task_id", [middlewares.isAuthenticated, middlewares.isOwned], taskController.update);
router.delete("/todolist/:todolist_id/task/:task_id", [middlewares.isAuthenticated, middlewares.isOwned], taskController.delete);

module.exports = router;

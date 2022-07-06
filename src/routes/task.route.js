const express = require("express");
const taskController = require("../controllers/task.controller");

const router = express.Router();

router.post(
    "/todolist/:todolist_id/task",
    taskController.create
);
router.get(
    "/todolist/:todolist_id/:task_id",
    taskController.find
);
router.patch(
    "/todolist/:todolist_id/task/:task_id",
    taskController.update
);
router.delete(
    "/todolist/:todolist_id/task/:task_id",
    taskController.delete
);

module.exports = router;

const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");

router.get("/", userController.findAllUsers);
router.get("/:id", userController.findUserById);
router.post("/", userController.createUser);
router.patch("/:id",userController.updateUserById);
router.delete("/:id", userController.deleteUserById);

module.exports = router;

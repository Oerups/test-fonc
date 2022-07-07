const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const middlewares = require("../middlewares/middlewares");

router.get("/", [middlewares.isAuthenticated], userController.findAllUsers);
router.get("/:id", [middlewares.isAuthenticated], userController.findUserById);
router.post("/", [middlewares.isAuthenticated], userController.createUser);
router.patch(
  "/:id",
  [middlewares.isAuthenticated],
  userController.updateUserById
);
router.delete(
  "/:id",
  [middlewares.isAuthenticated],
  userController.deleteUserById
);

module.exports = router;

const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const admin = require("../middleware/admin");
const userController = require("../controllers/userController");
//registering user (hash pw in model hook)
router.post("/", userController.registerUser); //"/api/users"
// //getting user by id
router.get("/:id", auth, userController.getUserById);
//update by id
router.put("/:id", userController.updateUser);
// //update forgot pw
// router.put(
//   "/updateForgotPw/:userId/:token",
//   userController.updateUser_forgot_pw
// );

module.exports = router;
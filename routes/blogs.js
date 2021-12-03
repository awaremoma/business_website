const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blogController");

router.post("/", blogController.createNewBlog); //"/api/blogs"

router.delete("/byPKId/:id", blogController.deleteBlogByPKId);

// router.post("/forgotPassword/:email", emailController.sendForgot_pw_email);

module.exports = router;
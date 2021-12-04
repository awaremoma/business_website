const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blogController");

router.post("/", blogController.createNewBlog); //"/api/blogs"

router.delete("/byPKId/:id", blogController.deleteBlogByPKId);

router.get("/", blogController.getAllBlogs);

router.get("/byPKId/:id", blogController.getBlogByPKId);

router.get("/byUserId/:id", blogController.getBlogByUserId);

router.put("/byPKId/:id", blogController.updateBlogById);

module.exports = router;
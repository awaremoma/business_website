const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blogController");
const upload = require("../middleware/upload");
const auth = require("../middleware/auth");
const admin = require("../middleware/admin");

router.post("/",upload.single("file"),[auth,admin], blogController.createNewBlog); //"/api/blogs"

router.delete("/byPKId/:id", blogController.deleteBlogByPKId);

router.get("/", blogController.getAllBlogs);

router.get("/byPKId/:id", blogController.getBlogByPKId);

router.get("/byUserId/:id", blogController.getBlogByUserId);

router.put("/byPKId/:id", blogController.updateBlogById);

module.exports = router;
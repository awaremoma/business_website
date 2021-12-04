const db = require("../models");

const blogController = {
    createNewBlog: async function (req, res) {
    
    try {
        const blog = await db.Blog.create(req.body); //"/api/blogs"
        res.json(blog);
    } catch (ex) {
      res.json(ex);
    }
  },
  deleteBlogByPKId: async function (req, res) {
    
    try {
        const wasDeleted = await db.Blog.destroy({
          where: {
            id: req.params.id,
          },
        });
  
        if (!wasDeleted)
          return res.status(404).send("Unable to delete the blog");
  
        res.json(wasDeleted);
      } catch (ex) {
        res.json(ex);
      }
  },
  updateBlogById: async function (req, res) { 
    try {
      const blog = await db.Blog.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      
      if (!blog) return res.status(404).send("Unable to update this blog");
      res.json(blog);
    } catch (ex) {
      res.json(ex);
    }
  },
  getAllBlogs: async function(req,res){
    try {
      const blogs = await db.Blog.findAll({
        include: [db.User],
      });
      if (!blogs) return res.status(404).send("Error finding the blogs");

      res.json(blogs);
    } catch (ex) {
      res.json(ex);
    }
  },
  getBlogByPKId: async function(req,res){
    try {
      const blog = await db.Blog.findOne({
        where: {
          id: req.params.id,
        },
        include: [db.User],
      });
      if (!blog) return res.status(404).send("Unable to find this blog");

      res.json(blog);
    } catch (ex) {
      res.json(ex);
    }
  },
  getBlogByUserId: async function(req,res){
    try {
      const blog = await db.Blog.findOne({
        where: {
          UserId: req.params.id,
        },
        include: [db.User],
      });
      if (!blog) return res.status(404).send("Unable to find this blog");

      res.json(blog);
    } catch (ex) {
      res.json(ex);
    }
  }


};

module.exports = blogController;
    
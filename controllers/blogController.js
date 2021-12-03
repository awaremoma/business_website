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
  deleteBlogByUserId: function(req,res){

  },
  updateBlog: async function (req, res) {
    
    try {
        const blog = await db.Blog.create(req.body); //"/api/blogs"
        res.json(blog);
    } catch (ex) {
      res.json(ex);
    }
  },


};

module.exports = blogController;
    
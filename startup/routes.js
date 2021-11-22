const users = require("../routes/users");
const auth = require("../routes/auth");
const emails = require("../routes/emails");
const blogs = require("../routes/blogs");
module.exports = function (app) {
  app.use("/api/users", users);
  app.use("/api/auth", auth);
  app.use("/api/emails", emails);
  app.use("/api/blogs", blogs);
};
const db = require("../models");

const userController = {
  registerUser: async function (req, res) {
    //need to figure out logic for checking if username is registerd too
    const { email, userName } = req.body;
    req.body.isAdmin = 0;
    try {
      let user = await db.User.findOne({
        where: {
          email: email,
        },
      });

      if (user)
        return res.status(400).send("User already registered with email.");
      const newUser = await db.User.create(req.body);
      console.log("-----New User------", newUser);
      res.json(newUser);
    } catch (ex) {
      console.log("-----Error-----", ex);
      res.json(ex);
    }
  },
  getUserById: async function (req, res) {
    try {
      const users = await db.User.findOne({
        where: {
          id: req.params.id,
        },
        include: [db.Blog],
      });

      if (!users) return res.status(404).send("Error Finding Users");

      res.json(users);
    } catch (ex) {
      console.log("-----Error-----", ex);
      res.json(ex);
    }
  },
  updateUser: async function (req, res) {
    //need to add logic here to lookup if user chage email and / or pw that they don't already exist
    try {
      const user = await db.User.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      res.json(user);
    } catch (error) {
      console.log("-----Error-----", ex);
      res.json(ex);
    }
  },
  updateUser_forgot_pw: async function (req, res) { //Can't test this until we have a token after logging in
    try {
      const { userId, token } = req.params;
      const { password } = req.body;

      let user = await db.User.findOne({
        where: {
          id: userId,
        },
      });
      if (!user) return res.status(400).send("Unable to find user");
      //else update the user w/ req.body.password

      const secret = user.password + "-" + user.createdAt;
      const payload = jwt.decode(token, secret);
      if (payload.userId === user.id) {
        const salt = await bcrypt.genSalt(10);
        const newHashPw = await bcrypt.hash(password, salt);

        const updatedUser = {
          firstName: user.firstName,
          lastName: user.lastName,
          userName: user.userName,
          country: user.country,
          email: user.email,
          password: newHashPw,
          isAdmin: user.isAdmin,
        };

        const result = await db.User.update(updatedUser, {
          where: {
            id: userId,
          },
        });

        res.json({ result, complete: true });
      } else {
        res
          .status(400)
          .json({ message: "Unable to decode JWT and change password" });
      }
    } catch (ex) {
      console.log("-----Error-----", ex);
      res.json(ex);
    }
  },
};

module.exports = userController;
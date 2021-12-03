const bcrypt = require("bcryptjs");
const hashPassword = async function (user) {
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  user.isAdmin = false;
};

module.exports = function (connection, Sequelize) {
  const User = connection.define("User", {
    // Giving the Author model a name of type STRING
    email: {
      type: Sequelize.STRING,
      validate: {
        len: [5, 50],

        isEmail: true,
      },
    },
    password: {
      type: Sequelize.STRING,
      validate: {
        len: [5, 550],
      },
    },
    isAdmin: {
      type: Sequelize.INTEGER,
    },
  });

  User.associate = function (models) {
    // Associating User with Purchases, Reviews
    // User is parent table to reviews, purchases
    User.hasMany(models.Blog, {
      onDelete: "cascade",
    });

  };

  User.beforeCreate(hashPassword);

  return User;
};
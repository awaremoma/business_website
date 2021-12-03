const bcrypt = require("bcryptjs");
const hashPassword = async function (user) {
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  user.isAdmin = false;
};

module.exports = function (connection, Sequelize) {
  const Blog = connection.define("Blog", {
    // Giving the Author model a name of type STRING
    subject: {
      type: Sequelize.STRING,
      validate: {
        len: [5, 50],

      },
    },
    text: {
        type: Sequelize.STRING,
        validate: {
          len: [5, 500],
  
        },
      },
  });

    //belongs to creates a Foreign key on the Review Table
    Blog.associate = function (models) {
      Blog.belongsTo(models.User, {
        foreignKey: {
          allowNull: false,
        },
      });
  
    };

  return Blog;
};
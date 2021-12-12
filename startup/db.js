const db = require("../models");

module.exports = (app) => {
  db.sequelize.sync().then( () => {
    const PORT = process.env.PORT || 3801;
    app.listen(PORT, () => console.log(`App listening on PORT: ${PORT}`));
  });
};
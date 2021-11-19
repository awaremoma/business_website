const express = require("express");
const app = express();
//env variables
require("dotenv").config();
//set root diectory
global.__basedir = __dirname;
//startup
// require("./startup/middleware")(app);
// require("./startup/routes")(app);
// require("./startup/db")(app);
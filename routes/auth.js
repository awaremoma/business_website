const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const authController = require("../controllers/authController");

router.post("/", authController.login);
router.post("/isTokenValid", authController.isTokenValid);
router.put("/", auth, authController.updatePassword);

module.exports = router;

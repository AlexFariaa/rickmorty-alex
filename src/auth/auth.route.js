const router = require("express").Router();
const authController = require("./auth.controller");
const {validLogin} = require("./auth.middleware")

router.post("/login", authController.loginController);

module.exports = router;
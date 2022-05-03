const router = require("express").Router();
const authController = require("./auth.controller");
const {validLogin} = require("./auth.middleware")

router.post("/login",validLogin, authController.loginController);

module.exports = router;
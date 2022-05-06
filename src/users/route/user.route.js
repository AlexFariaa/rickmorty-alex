const router = require("express").Router();
const userController = require("../controller/user.controller");
const {validLogin} = require("../../auth/auth.middleware")

router.get("/",validLogin, userController.findAllUserController);
router.post("/create", userController.createUserController);

module.exports = router;

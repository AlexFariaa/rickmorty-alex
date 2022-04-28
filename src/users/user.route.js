const router = require("express").Router();
const userController = require("./user.controller")

router.get("/", userController.findAllUserController);
router.post("/create", userController.createUserController);

module.exports = router
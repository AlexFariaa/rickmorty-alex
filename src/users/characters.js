const router = require("express").Router();
const charactersController = require("./characters.controller");

router.get("/", charactersController.findAllCharactersController);
router.get("/find/{id}", charactersController.findByIdCharacterController);
router.post("/create", charactersController.createCharacterController);
router.put("/update/{id}", charactersController.updateCharacterController);
router.delete("/delete/{id}", charactersController.deleteCharacterController);
//router.get("/search", charactersController.findByNameCharacterController);

module.exports = router;

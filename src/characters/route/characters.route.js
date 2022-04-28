const router = require("express").Router();
const charactersController = require("../controller/characters.controller");
const {
  validId,
  validObjectBody,
} = require("../../middlewares/characters.middlewares");

router.get("/", charactersController.findAllCharactersController);

router.get(
  "/find/:id",
  validId,
  charactersController.findByIdCharacterController
);
router.post(
  "/create",
  validObjectBody,
  charactersController.createCharacterController
);
router.put(
  "/update/:id",
  validObjectBody,
  validId,
  charactersController.updateCharacterController
);
router.delete(
  "/delete/:id",
  validId,
  charactersController.deleteCharacterController
);
//router.get("/search", charactersController.findByNameCharacterController);

module.exports = router;

const router = require("express").Router();
const charactersController = require("../controller/characters.controller");
const {
  validId,
  validObjectBody,
} = require("../middlewares/characters.middlewares");

const { validLogin } = require("../../auth/auth.middleware");

router.get("/", charactersController.findAllCharactersController);

router.get(
  "/find/:id",
  validId,
  charactersController.findByIdCharacterController
);
router.post(
  "/create",
  validLogin,
  validObjectBody,
  charactersController.createCharacterController
);
router.put(
  "/update/:id",
  validObjectBody,
  validId,
  validLogin,
  charactersController.updateCharacterController
);
router.delete(
  "/delete/:id",
  validId,
  validLogin,
  charactersController.deleteCharacterController
);
router.get(
  "/search",
  validLogin,
  charactersController.findByNameCharacterController
);

module.exports = router;

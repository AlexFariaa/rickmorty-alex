const characterService = require("../service/characters.service");

const findAllCharactersController = async (req, res) => {
  const allCharacters = await characterService.findAllCharactersService();

  if (allCharacters.length == 0) {
    return res.status(404).send({ message: "Nenhum personagem cadastrado!" });
  }

  res.status(200).send(allCharacters);
};

const findByIdCharacterController = async (req, res) => {
  const idParam = req.params.id;
  const idCharacter = await characterService.findByIdCharacterService(idParam);

  if (!idCharacter) {
    return res.status(404).send({ message: "Id não encontrado!" });
  }

  return res.status(200).send(idCharacter);
};

const createCharacterController = async (req, res) => {
  const character = req.body;
  const newCharacter = await characterService.createNewCharacterService(
    character
  );
  return res.status(201).send(newCharacter);
};

const updateCharacterController = async (req, res) => {
  const idParam = req.params.id;
  const character = req.body;

  const updateCharacter = await characterService.updateCharacterService(
    idParam,
    character
  );

  return res.status(200).send(updateCharacter);
};

const deleteCharacterController = async (req, res) => {
  const idParam = req.params.id;
  const deleteCharacter = await characterService.deleteCharacterService(
    idParam
  );
  return res.status(200).send({ message: "Personagem deletado com sucesso!" });
};

const findByNameCharacterController = async (req, res) => {
  const { message } = req.body;

  const character = await characterService.findByNameCharacterService(message);

  if (character.length === 0) {
    return res
      .status(400)
      .send({ message: "Não existe personagens com esse nome" });
  }

  return res.send({
    character,
  });
};

module.exports = {
  findAllCharactersController,
  findByIdCharacterController,
  createCharacterController,
  updateCharacterController,
  deleteCharacterController,
  findByNameCharacterController,
};

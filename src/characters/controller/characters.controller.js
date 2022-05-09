const characterService = require("../service/characters.service");

const findAllCharactersController = async (req, res) => {
  try {
    let { offset, limit } = req.query;

    limit = Number(limit);
    offset = Number(offset);

    if (!limit) {
      limit = 5;
    }

    if (!offset) {
      offset = 0;
    }

    const allCharacters = await characterService.findAllCharactersService(
      offset,
      limit
    );

    const total = await characterService.countCharacterService();

    const currentUrl = req.baseUrl;

    const next = offset + limit;

    const nextUrl =
      next < total ? `${currentUrl}?limit=${limit}&offset=${next}` : null;

    const previous = offset - limit < 0 ? null : offset - limit;

    const previousUrl =
      previous != null
        ? `${currentUrl}?limit=${limit}&offset=${previous}`
        : null;

    if (!allCharacters.length === 0) {
      return res.status(404).send({ message: "Nenhum personagem cadastrado!" });
    }

    return res.status(200).send({
      nextUrl,
      previousUrl,
      allCharacters,
      allCharacters: allCharacters.map((personagem) => ({
        id: personagem._id,
        user: personagem.user,
        name: personagem.name,
        imageUrl: personagem.imageUrl,
      })),
    });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
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
    character,
    req.userId //Para fazer a autenticação se o usuario que quer criar o personagem esta logado
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
  const { message } = req.query;

  const character = await characterService.findByNameCharacterService(message);

  if (character.length === 0) {
    return res
      .status(400)
      .send({ message: "Não existe personagens com esse nome" });
  }

  return res.status(200).send({
    allCharacters: allCharacters.map((personagem) => ({
      id: personagem._id,
      user: personagem.user,
      name: personagem.name,
      imageUrl: personagem.imageUrl,
    })),
  });
};

/*const findByNameCharacterController = async (req, res) => {
  try {
    const { message } = req.body;

    const character = await characterService.findByNameCharacterController(
      message
    );

    if (character.length === 0) {
      return res
        .status(400)
        .send({ message: "Não existe personagens com esse nome" });
    }

    return res.status(200).send({ character });

  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};*/

module.exports = {
  findAllCharactersController,
  findByIdCharacterController,
  createCharacterController,
  updateCharacterController,
  deleteCharacterController,
  findByNameCharacterController,
};

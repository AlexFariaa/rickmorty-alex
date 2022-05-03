const Characters = require("../models/characters");

const findAllCharactersService = async () => {
  const allCharacters = await Characters.find();
  return allCharacters;
};

const findByIdCharacterService = async (idParam) => {
  const idCharacter = await Characters.findById(idParam);
  return idCharacter;
};

const createNewCharacterService = async (character) => {
  const newCharacter = await Characters.create(character);
  return newCharacter;
};

const updateCharacterService = async (idParam, character) => {
  const updateCharacter = await Characters.findByIdAndUpdate(
    idParam,
    character
  );
  return updateCharacter;
};

const deleteCharacterService = async (idParam) => {
  const deleteCharacter = await Characters.findByIdAndDelete(idParam);
  return deleteCharacter;
};

const findByNameCharacterService = (message) => {
  Characters.findOne({
    message: { $regex: `${message || ""}`, $options: "i" },
  }).populate("Characters");
};

module.exports = {
  findAllCharactersService,
  findByIdCharacterService,
  createNewCharacterService,
  updateCharacterService,
  deleteCharacterService,
  findByNameCharacterService,
};

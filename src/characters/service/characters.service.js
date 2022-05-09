const Characters = require("../models/characters");

const findAllCharactersService = async (offset = 0, limit = 5) => {
  const allCharacters = await Characters.find()
    .sort({ _id: -1 })
    .skip(offset)
    .limit(limit);
  return allCharacters;
};

const countCharacterService = () => Characters.countDocuments();

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

const findByNameCharacterService = (message) =>
  Characters.find({
    name: { $regex: `${message || ""}`, $options: "i" },
  });

module.exports = {
  findAllCharactersService,
  findByIdCharacterService,
  createNewCharacterService,
  updateCharacterService,
  deleteCharacterService,
  findByNameCharacterService,
  countCharacterService,
};

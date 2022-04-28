const findAllCharactersController = async (req, res) => {
  res.send({ message: "find all personagem ok" });
};

const findByIdCharacterController = async (req, res) => {
  res.send({ message: "find by id Character ok" });
};

const createCharacterController = async (req, res) => {
  res.send({ message: "create Character ok" });
};

const updateCharacterController = async (req, res) => {
  res.send({ message: "update Character ok" });
};

const deleteCharacterController = async (req, res) => {
  res.send({ message: "delete Character ok" });
};

module.exports = {
  findAllCharactersController,
  findByIdCharacterController,
  createCharacterController,
  updateCharacterController,
  deleteCharacterController,
};

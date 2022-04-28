const userService = require("./user.service")

const createUserController = async (req, res) => {
  const { name, username, email, password, photo } = req.body;

  if (!name || !username || !email || !password || !photo) {
    return res.status(400).send({
      message:
        "Alguns campos não foram preenchidos: Name, Username, Email, Password ou Photo",
    });
  }

  const foundUser = await userService.findByEmailUserService(email);

  if (foundUser) {
    return res.status(400).send({ message: "Usuario ja cadastrado!" });
  }

  const user = await userService
    .createUserService(req.body)
    .catch((err) => console.log(err.message));

  if (!user) {
    return res.status(400).send({ message: "Erro ao criar o usuário" });
  }

  res.status(201).send(user);
};

const findAllUserController = async (req, res) => {
  res.send({ message: "find all user ok" });
};

module.exports = {
  createUserController,
  findAllUserController,
};

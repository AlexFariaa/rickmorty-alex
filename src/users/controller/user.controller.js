const userService = require("../service/user.service");
const authService = require("../../auth/auth.service")

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

  const token = authService.generateToken(user.id)

  res.status(201).send({
    user: {
      id: user.id,
      name,
      username,
      email,
      photo
    },
    token
  });
};

const findAllUserController = async (req, res) => {
  const allUser = await userService.findAllUserService();

  if (allUser.length == 0) {
    return res.status(404).send({ message: "Nenhum usuário cadastrado" });
  }

  return res.status(200).send(allUser);
};

module.exports = {
  createUserController,
  findAllUserController,
};

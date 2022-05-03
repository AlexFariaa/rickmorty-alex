const User = require("../models/user");

const findByEmailUserService = (email) => User.findOne({ email: email });

const createUserService = (body) => User.create(body);

const findAllUserService = async () => {
  const allUser = await User.find();
  return allUser;
};

const findByIdUserService = (idUser) => User.findById(idUser)

module.exports = {
  findByEmailUserService,
  createUserService,
  findAllUserService,
  findByIdUserService
};

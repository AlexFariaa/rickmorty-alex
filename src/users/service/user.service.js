const User = require("../models/user");

const findByEmailUserService = (email) => User.findOne({ email: email });

const createUserService = (body) => User.create(body);

const findAllUserService = async () => {
  const allUser = await User.find();
  return allUser;
};

module.exports = {
  findByEmailUserService,
  createUserService,
  findAllUserService,
};

const UserModel = require("../models/User");
const bycrypt = require("bcrypt");

const createUser = async (req, res) => {
  const userData = { ...req.body };
  const userNameExist = await UserModel.findOne({ userName: user.name });
  const userEmailExist = await UserModel.findOne({ userEmail: user.email });

  if (userNameExist || userEmailExist) {
    res.json({ message: "It seems that this account was already created" });
  } else {
    userData.password = await bycrypt.hash(userData.password, 10);
    const user = new UserModel(userData);
  }
  try {
    await user.save();
    res.status(201).json({ user: user });
  } catch (err) {
    res.status(400).json({ error: err });
  }
};

const editUser = async (req, res) => {
  const id = req.params.id;
  const user = await UserModel.findById(id).exec();
  const userUpdatedData = {
    ...user,
    userName: user.userName,
    email: user.email,
  };
  try {
    await user.save(userUpdatedData);
    res.status(201).json({ user: user });
  } catch (err) {
    res.status(400).json({ error: err });
  }
};

const deleteUser = async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await UserModel.findById(userId).exec();
    await user.remove();
    //redirect somewhere;
  } catch (err) {
    res.status(400).json({ error: err });
  }
};

module.exports = {
  createUser,
  editUser,
  deleteUser,
};

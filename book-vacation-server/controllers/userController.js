// import { verifyAccessToken, generateAccessToken } from "../helpers/auth";
const {generateAccessToken} = require ("../helpers/auth")
const UserModel = require("../models/User");
const bycrypt = require("bcrypt");

const createUser = async (req, res) => {
  const user = { ...req.body };
  const userNameExist = await UserModel.findOne({ userName: user.name });
  const userEmailExist = await UserModel.findOne({ email: user.email });
  if (userNameExist || userEmailExist) {
    res.json({ message: "It seems that this account was already created" });
  } else {
    user.password = await bycrypt.hash(user.password, 10);
    const userModel = new UserModel(user);
    try {
      await userModel.save();
      const token = generateAccessToken(userModel.toObject());
      res.status(201).json({ user: user, token: token });
    } catch (err) {
      console.log("error check", err.message)
      res.status(400).json({ error: err });
    }
  }
};

const loginUser = async (req, res) => {

  const email = req.body.email;
  const user = await UserModel.findOne({ email });
  if (!user) {
    res.json("There's no account with this email, please try again!")
  }
  const match = await bycrypt.compare(req.body.password, user.password);
  
  if (!match) {
    res.json("Password is invalid, please try again!");
  }
  const token = generateAccessToken(user.toObject());
 
  res.status(201).json({ user: user, token: token })
}

const editUser = async (req, res) => {
  const userUpdatedData = {
    ...req.user,
    userName: user.userName,
    email: user.email,
  };
  try {
    await user.save(userUpdatedData);
    res.status(202).json({ user: user });
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
  loginUser,
  editUser,
  deleteUser,
};

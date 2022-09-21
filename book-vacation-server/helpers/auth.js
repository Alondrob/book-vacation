const jwt = require("jsonwebtoken");
const bycrypt = require("bcrypt");
const UserModel = require("../models/User");

const authUser = async (userData) => {
    const user = UserModel.findById(userData.id);
    if (!user) {
        return res.json({ message: "Invalid Username or Password, Please try again!" })
    };
    bycrypt.compare(user.password, userData.password)
};

// const createToken = jwt.sign(
//     {user_id: user._id, email}
// )
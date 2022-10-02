const jwt = require("jsonwebtoken");
const bycrypt = require("bcrypt");

const salt = bycrypt.genSaltSync(10);

const generateAccessToken = (userObject) => {
  return jwt.sign(userObject, salt, { expiresIn: "3600s" });
};

const verifyAccessToken = (token) => {
  return new Promise((res, rej) => {
    if (!token) {
      rej("Toekn Is Null");
    } else {
      jwt.verify(token, salt, (err, user) => {
        if (err) {
          rej("Token Isn't Valid");
        } else {
          res(user);
        }
      });
    }
  });
};

module.exports = { generateAccessToken, verifyAccessToken };

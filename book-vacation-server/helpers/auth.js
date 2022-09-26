const jwt = require("jsonwebtoken");

const secret = "09f26e402586e2faa8da4c98a35f1b20d6b033c6097befa8be3486a829587fe2f90a832bd3ff9d42710a4da095a2ce285b009f0c3730cd9b8e1af3eb84df661"

 const generateAccessToken = (obj) => {
  return jwt.sign(
    obj,
    secret,
    { expiresIn: "3600s" }
  );
};

 const verifyAccessToken = (token) => {
    return new Promise((res, rej) => {
        if (!token) {
            rej("Toekn Is Null");
        } else {
            jwt.verify(token, secret, (err, user) => {
                if (err) {
                    rej("Token Isn't Valid");
                } else {
                    res(user);
                }
            });
        }

    })
};

module.exports = { generateAccessToken, verifyAccessToken };
const { verifyAccessToken } = require("../helpers/auth");

const loggedInMiddleware = async (req, res, next) => {
  console.log("auth", req.headers);
  const { authorization } = req.headers;
  
  if (!authorization) {
    return res.status(401).json({ error: "Authorization token required" });
  }
  const token = authorization.split(" ")[1];

    
  try {
    const user = await verifyAccessToken(token);
    req.user = user;
    next();
  } catch (err) {
    res.sendStatus(401);
  }
};

module.exports = { loggedInMiddleware };

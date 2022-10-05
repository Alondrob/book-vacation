const { verifyAccessToken } = require("../helpers/auth");

const loggedInMiddleware = async (req, res, next) => {
  //  console.log(req.headers)
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ error: "Authorization token required" });
  }
  const token = authorization.split(" ")[1];
  // const token = authHeader && authHeader.split(" ")[1];
    console.log("token", token);
    
  try {
    const user = await verifyAccessToken(token);
    req.user = user;
    next();
  } catch (err) {
    res.sendStatus(401);
  }
};

module.exports = { loggedInMiddleware };

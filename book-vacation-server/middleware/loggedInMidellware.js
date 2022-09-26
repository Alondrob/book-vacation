const { verifyAccessToken } = require ("../helpers/auth");

 const loggedInMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(" ")[1];

    try {
        const user = await verifyAccessToken(token);
        req.user = user;
        next()
    } catch (err) {
        res.sendStatus(401);
    }
};

module.exports = { loggedInMiddleware };
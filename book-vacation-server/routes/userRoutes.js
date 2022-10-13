const express = require('express');
const { createUser,loginUser, editUser, deleteUser, getUserProperties } = require('../controllers/userController');
const { loggedInMiddleware } = require("../middleware/loggedInMidellware");

const router = express.Router();


router.post("/create-user", createUser);
router.post("/login-user", loginUser);
router.put("/edit-user",loggedInMiddleware, editUser);
router.delete("/delete-user",loggedInMiddleware, deleteUser);
router.get("/:id/properties", loggedInMiddleware, getUserProperties);



module.exports = router;
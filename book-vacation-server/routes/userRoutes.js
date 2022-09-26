const express = require('express');
const { createUser, editUser, deleteUser } = require('../controllers/userController');
const { loggedInMiddleware } = require("../middleware/loggedInMidellware");

const router = express.Router();


router.post("/create-user", createUser);
router.put("/edit-user",loggedInMiddleware, editUser);
router.delete("/delete-user",loggedInMiddleware, deleteUser);



module.exports = router;
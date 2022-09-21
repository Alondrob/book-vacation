const express = require('express');
const { createUser, editUser, deleteUser } = require('../controllers/userController');
const router = express.Router();


router.post("/create-user", createUser);
router.put("/user-update", editUser);
router.put("/delete-user", deleteUser);



module.exports = router;
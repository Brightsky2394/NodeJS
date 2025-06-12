const express = require('express');
const { signupUser, loginUser, getUserById, getAllUsers, getUserByIdAndUpdate, deleteUserById } = require('./user.controller');
const router = express.Router();

router.post("/sign-up", signupUser);
router.get('/login', loginUser);
router.get('/user/:id', getUserById);
router.get('/users', getAllUsers);
router.put('/user-update/:id', getUserByIdAndUpdate);
router.delete('/delete-user/:id', deleteUserById)

module.exports = router;
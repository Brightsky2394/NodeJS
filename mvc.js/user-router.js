const express = require('express');
const { welcomeMessage, createUser, getAllUsers, getUserById, updateUserById, deleteUserById, searchUser } = require('./user-controller');
const router = express.Router();

router.get('/welcome-message', welcomeMessage);
router.post('/create-user', createUser);
router.get('/get-allusers', getAllUsers);
router.get('/get-userbyid/:id', getUserById);
router.put('/update-userbyid/:id', updateUserById);
router.delete('/delete-userbyid/:id', deleteUserById);
router.get('/search-user', searchUser);
module.exports = router;
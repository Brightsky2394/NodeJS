const Users = require('./userschema-model');

const welcomeMessage = (req, res) => {
    res.send("Hello Users, you're all welcome to the world of NodeJS");
};

const createUser = async (req, res) => {
    const { firstName, lastName, maritalStatus, gender, age } = req.body;
    const user = new Users({ firstName, lastName, maritalStatus, gender, age});
    await user.save();
    res.status(201).json({
        message: "User successfully created",
        user
    });
};

const getAllUsers = async (req, res) => {
    const users = await Users.find();
    res.status(200).json({
        message: 'Here are the details of the users',
        users
    })
};

const getUserById = async (req, res) => {
    const { id } = req.params;
    const user = await Users.findById(id);
    res.status(200).json({
        message: "User retrieved successfully",
        user
    })
};

const updateUserById = async (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, maritalStatus, gender, age } = req.body;
    const updatedUser = await Users.findByIdAndUpdate(id, { firstName, lastName, maritalStatus, gender, age}, { new: true});
    res.status(200).json({
        message: "User successfully updated",
        updatedUser
    })
};

const deleteUserById = async (req, res) => {
    const { id } = req.params;
    const deleteUser = await Users.findByIdAndDelete(id);
    res.status(200).json({
        message: "User is deleted successfully",
        deleteUser
    })
};

const searchUser = async (req, res) => {
    const { gender } = req.query;
    const users = await Users.find({gender});
    res.status(200).json({
        message: `The retrieve users of \'${gender}\' gender are`,
        users
    })
}

module.exports = { welcomeMessage, createUser, getAllUsers, getUserById, updateUserById, deleteUserById, searchUser };
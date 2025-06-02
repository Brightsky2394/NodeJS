const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    maritalStatus: String,
    gender: String,
    age: Number
});

const Users = mongoose.model('Users', userSchema);
module.exports = Users;
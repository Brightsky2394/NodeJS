const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "name is required"],
        trim: true
    },
    email: {
        type: String,
        required: [true, "email is required"],
        trim: true,
        lowercase: true,
        unique: true
    }, 
    password: {
        type: String,
        trim: true,
        required: [true, "password is required"],
        unique: true,
    }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
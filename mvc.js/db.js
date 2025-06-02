const mongoose = require('mongoose');

const dbConnect = () => {
    mongoose.connect('mongodb://localhost:27017/users-detail');
    console.log(`Connected to Database`);
};

module.exports = dbConnect;
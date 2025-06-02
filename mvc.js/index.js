const express = require('express');
const dbConnect = require('./db');
const router = require('./user-router');
const app = express();
app.use(express.json());
app.use(router);

const port = 8080;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    dbConnect();
})
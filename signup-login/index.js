const express = require('express');
const dbConnect = require('./user.db');
const router = require('./user.router');
const app = express();

app.use(express.json());
app.use('/api', router);

const port = 8080;

app.listen(port, () => {
    dbConnect();
    console.log(`Server is running on port ${port}`);
})
const express = require('express');
const path = require('path');
const app = express();
app.use('/public', express.static(path.join(__dirname, 'static')));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'example.html'));
});

app.get('/example', (req, res) => {
    res.send(req.query);
});

app.get('/example/:name/:age', (req, res) => {
    res.send('My name is ' + req.params.name + " and I'm "  + req.params.age + ' year old')
})

app.listen(4000);
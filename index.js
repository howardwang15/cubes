const express = require('express');
const path = require('path');
const app = express();


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(5000, (req, res) => {
    console.log('CUBES app listening on port 5000...');
});
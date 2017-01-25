require('dotenv').config();
const express = require('express');
const path = require('path');
const port = process.env.PORT || 9000;
const searchYouTube = require('./helpers').searchYouTube;
const bodyParser = require('body-parser');

const app = express();
app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json());

app.get('/videos/:searchTerm', (req, res) => {
    searchYouTube(req.params.searchTerm)
        .then((results) => {
            res.json(results);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
});

app.listen(port, ()=> { console.log(`Running on ${port}`); });
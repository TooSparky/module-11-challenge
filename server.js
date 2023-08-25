const express = require('express');
const path = require('path');

const PORT = process.env.port || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extened: true }));

app.use(express.static('public'));

//Route for homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
});

//Route for notes page
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'))
});

//Wildcard
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/404.html'))
});

//Local server set up until Heroku
app.listen(PORT, () => console.log(`App listening at http://localhost:${PORT}`));

const db = require('express').Router();

// GET route for retrieving all notes
db.get('/', (req, res) => readFromFile('../db/db.json').then((data) => res.json(JSON.parse(data))));

// POST route for submitting notes
db.post('/', (req, res) => {
    const { title, text } = req.body;
    
    if(title && text) {
        const newNote = {
            title,
            text
        };
    
        const response = {
            status: 'success',
            body: newNote,
        };

        res.json(response);
    }
    else {
        res.json('Error in posting note');
    }
});

module.exports = db;

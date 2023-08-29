const db = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { readAndAppend, readFromFile, writeToFile } = require('../helpers/fsUtils');

// GET route for retrieving all notes
db.get('/', (req, res) => readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data))));

// POST route for submitting notes
db.post('/', (req, res) => {
    const { title, text } = req.body;
    
    if (title && text) {
        const newNote = {
            title,
            text,
            notes_id: uuidv4(),
        };

        readAndAppend(newNote, './db/db.json');
    
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

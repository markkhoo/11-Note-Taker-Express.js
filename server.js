// Dependencies
const fs = require('fs');
const express = require('express');
const path = require('path');
const {v4:uuidv4} = require('uuid');

// EXPRESS config
const app = express();
const PORT = process.env.PORT || 8080;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Should I require this?
// require('./public/assets/js/index')(app);

// Listner
app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
});

// Serve Static Files
app.use(express.static(path.join(__dirname, 'public')));

// HTML Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

// API Routes
app.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname,'db/db.json'));
});

app.post('/api/notes', (req, res) => {
    let postItNote = req.body;
    postItNote.id = uuidv4();

    fs.readFile('./db/db.json', (err, data) => {
        if(err) throw err;
        let holdNotes = JSON.parse(data);
        holdNotes.push(postItNote);

        fs.writeFile('./db/db.json', JSON.stringify(holdNotes), (err) => {
            if(err) throw err;
            res.json(postItNote);
        });
    });
});

// app.delete('/api/notes', (req, res) => {

// });
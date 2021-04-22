// Dependencies
const fs = require('fs');
const express = require('express');
const path = require('path');

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
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

// API Routes
app.get('/api/notes', (req, res) => {
    
});

app.post('/api/notes', (req, res) => {

});

// app.delete('/api/notes', (req, res) => {

// });
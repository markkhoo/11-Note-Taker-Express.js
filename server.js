// Dependencies
const express = require('express');

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
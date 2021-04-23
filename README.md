# 11-Note-Taker-Express.js

## Description
This is a simple note take app that allows user to write, save and delete notes. Visit the [Application](https://mighty-dusk-98751.herokuapp.com/) here.

## Usage
This application can be used to keep track of tasks and can be accessed wherever there is access to a web browser and online. For personal use, fork this repository and see [testing](##Testing).
![DEMO](/App-Demo.gif)

---

## Testing
No testing modules are used. However, this repository can be forked and tested by anyone. 
1. Navigate to this repository within your CLI.
2. Install modules by running the command `'npm install'` in your CLI. This is necesarry to run the application locally.
3. Run `'npm start'` in your CLI to locally run the server. 
4. With your prefered choice of browser, enter the address `'http://localhost:3000'` to start the application locally.

## Technologies Used
* HTML5
* Cascading Style Sheets
* Javascript
* Node.js
* Express
* uuID

## Code Snippet
```javascript
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
```
This portion of code is a "solution" to saving notes into a json file. With a limited knowledge of how to read a json file type, this code portion reads stored notes through `'fs'`, parses the data and pushes a new note into the array of objects, and writes the data back into the json file through `'fs'` again. I don't consider this the most ellegant solution but a solution none the less. *Sorry future Mark if you see this.*

---

## Contact
For any questions contact GitHub user [markkhoo](https://github.com/markkhoo) or at this email: markkhoo95@gmail.com
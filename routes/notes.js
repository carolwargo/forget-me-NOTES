const notes = require("express").Router();
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const {
  readFromFile,
  writeToFile,
  readAndAppend,
} = require("../helpers/fsUtils");


// GET route for all notes
notes.get("/", (req,res) => {
  readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)));
});


// GET route for specific note by Id
notes.get('/:id', (req,res)=>{
  const noteId = req.params.id
  readFromFile('./db/db.json')
  .then((data) => JSON.parse(data))
  .then((json) => {
    const result = json.filter((note) => note.id === noteId);
    return result.length > 0
    ? res.json(result)
    : res.json('No note with that Id');
  })
});



// POST route for newly saved note
notes.post("/", (req, res) => {
  const { title, text } = req.body;

  if (req.body) {
    const newNote = {
      title,
      text,
      id: uuidv4(),
    };
    readAndAppend(newNote, './db/db.json')
    res.json(newNote)
  }else{
    res.error('Error creating new note')
  }
});



// DELETE route for existing notes
notes.delete('/:id', (req,res) => {
    const noteId = req.params.id
    readFromFile('./db/db.json')
    .then((data) => JSON.parse(data))
    .then((json) => {
        const result = json.filter((note) => note.id !== noteId );

        writeToFile('./db/db.json', result);

        res.json(`Note ${noteId} was deleted!`)
        console.info(`Note ${noteId} was deleted!`)
    }) 
});

module.exports = notes;
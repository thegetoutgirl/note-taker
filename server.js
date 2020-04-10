const express = require("express");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 7000;

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const db = require("./db/db.json");

// app.get("/", function(req, res) {
//   res.json(path.join(__dirname, "public/index.html"));
// });
// var notesWritten {
//   uuid
// }

// ROUTES

// Returns notes.html file
app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
  });

  // Returns index.html page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/index.html"));
  });

// GET Reads the db.json file and returns all saved notes as JSON
app.get("/api/notes", function(req, res){
  res.json(db)
});

// POST Receives a new note to save on the request body, add to JSON file, return new note to client
app.post("/api/notes", function(req, res) {
  db.push({
    id: Math.floor(Math.random() * 1000),
    ...req.body});

    fs.writeFile("./db/db.json", JSON.stringify(db), function() {
      res.json(db);
    })
    
});

// DELETE Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique id when it's saved. In order to delete a note, you'll need to read all notes from the db.json file, remove the note with the given id property, and then rewrite the notes to the db.json file.

// app.delete("/api/notes/:id", function (req, res) {

// })


// LISTENER

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
})
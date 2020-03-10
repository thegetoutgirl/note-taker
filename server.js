// nick's code

const express = require("express");
const inquirer = require("inquirer");
const path = require("path");
const uuid = require("uuid");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const db = require(".db/db.json");

app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/notes.html")    )
  });

app.post("/api/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "./db.json"));
//   // Add res.params.id after the app.delete()
  //   // javascript splice()
  //   // push note to array
  //   // fs.writeFile or appendFile to save the note array
});
app.get("*", function(req, res) {
      res.sendFile(path.join(__dirname, "./public/index.html"));
    });

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
})
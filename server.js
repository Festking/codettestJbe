l//npm init -y
//npm i express
//npm i mongoose

const fs = require("fs");
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const app = express();
const port = 3000;

const User = require("./models/User"); // Adjusted the path to match the directory structure

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // Added to handle JSON data

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect("mongodb+srv://orjichidubemfestus:Festus%402005@cluster0.evcw1hc.mongodb.net/UserDataDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Database connected');
})
.catch((e) => {
  console.log(e);
  console.log("Database can't be connected");
});

app.post("/submit", async (req, res) => {
  const userData = new User(req.body);
  await userData.save();
  res.sendFile(path.join(__dirname, 'public', 'submit.html'));
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

app.listen(port, () => {
  console.log("App Running on port: ", port);
});

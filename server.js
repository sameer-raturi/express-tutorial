const express = require("express");

// creating the server named as app
const app = express();

// basic routing
app.get("/", (req, res) => {
  res.send("Hi");
  res.status(500).send("bye");
  res.download("server.js");
});

// app will be listening to all the requests coming at port 3000
app.listen(3000);

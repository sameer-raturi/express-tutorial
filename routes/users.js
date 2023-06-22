const express = require("express");

// routers is kind of the mini app
const routers = express.Router();

routers.get('/', (req,res) => {
  res.send("User List");
})

routers.get('/new', (req,res) => {
  res.send("New User");
})

module.exports = routers;
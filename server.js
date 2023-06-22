const express = require("express");
const userRouter = require("./routes/users");

// creating the server named as app
const app = express();

// setting view engine
app.set("view engine", "ejs");

// basic routing
app.get("/", (req, res) => {
  res.render("index", { text12: "Sameer" });
});

app.use("/users", userRouter);

// app will be listening to all the requests coming at port 3000
app.listen(3000);

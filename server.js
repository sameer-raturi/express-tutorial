const express = require("express");
const userRouter = require("./routes/users");

// creating the server named as app
const app = express();

// here logger function is kind of middleWare
const logger = (req, res, next) => {
  console.log(req.originalUrl);
};


//  express also provide the static middleWare which serves the static files
// now when we hit localhost:3000 index.html will get rendered
// when we hit localhost:3000/test/tt.html the tt.html inside the public folder will get run
app.use(express.static("public"));

// whole app will use the logger
// app.use(logger);

// setting view engine
app.set("view engine", "ejs");

// basic routing
// only below function will use the logger
app.get("/", logger, (req, res) => {
  res.render("index", { text: "Sameer" });
});

app.use("/users", userRouter);

// app will be listening to all the requests coming at port 3000
app.listen(3000);

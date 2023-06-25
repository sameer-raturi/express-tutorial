const express = require("express");

// routers is kind of the mini app
const routers = express.Router();

// this router apps will use the logger
// routers.use(logger);
routers.get("/", (req, res) => {
  res.send("User List");
});

routers.get("/new", (req, res) => {
  res.send("New User");
});

routers.post("/", (req, res) => {
  res.send("Create User");
});

// routers.get('/:userId', (req, res) => {
//   res.send(`Get User with ID ${req.params.userId}`);
// });
// routers.post('/:userId', (req, res) => {
//   res.send(`Get User with ID ${req.params.userId}`);
// });
// routers.put('/:userId', (req, res) => {
//   res.send(`Get User with ID ${req.params.userId}`);
// });
// routers.delete('/:userId', (req, res) => {
//   res.send(`Get User with ID ${req.params.userId}`);
// });

// all the above code can be replace with router.route

routers
  .route("/:userId")
  .get((req, res) => {
    console.log(req.user);
    res.send(`Get User with ID ${req.params.userId}`);
  })
  .put((req, res) => {
    res.send(`update User with ID ${req.params.userId}`);
  })
  .post((req, res) => {
    res.send(`create User with ID ${req.params.userId}`);
  })
  .delete((req, res) => {
    res.send(`delete User with ID ${req.params.userId}`);
  });

const users = [
  {
    name: "Kyle",
  },
  {
    name: "Simpson",
  },
];

// router.param is middleWare 
// middleware in express run when we get req from server and before res get to the user
// to run the next functions we need to call the next function
routers.param("userId", (req, res, next, userId) => {
  console.log(userId);
  req.user = users[userId];
  next();
});

module.exports = routers;

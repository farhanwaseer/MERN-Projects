const express = require("express");
const app = express();


const PORT = 3000;

//MiddleWare

const middleware = (req, res, next) => {
  console.log(`Hello my middle ware`);
  // next();
};

middleware();


app.get("/", (req, res) => {
  res.send(`Hello world from the sever`);
});

app.get("/about", middleware, (req, res) => {
  res.send(`Hello world about from the sever`);
});

app.get("/contact", (req, res) => {
  res.send(`Hello world contact from the sever`);
});

app.get("/signin", (req, res) => {
  res.send(`Hello  world Login from the sever`);
});

app.get("/signup", (req, res) => {
  res.send(`Hello  world Register from the sever`);
});

app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
});

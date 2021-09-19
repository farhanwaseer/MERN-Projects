const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World from server");
});

app.get("/about", (req, res) => {
  res.send("Hello About from server");
});

app.get("/contact", (req, res) => {
  res.send("Hello Contact from server");
});

app.get("/signin", (req, res) => {
    res.send("Hello login World from server");
  });

  app.get("/signup", (req, res) => {
    res.send("Hello Registration World from server");
  });
  
console.log("App is running");

const port = 3000;

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});

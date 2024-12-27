const express = require("express");
require('dotenv').config();
const app = express();
const port = 3000

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
    res.send("Welcome to twitter")
})

app.get("/login", (req,res) => {
    res.send("<h1>Please login at ankitlakhlan.com</h1>")
})

app.get("/register", (req, res) => {
    res.send("<h2>Please register at ankitlakhlan.com </h2>")
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

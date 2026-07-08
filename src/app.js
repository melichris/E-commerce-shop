const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("MeliWear API is alive and watching!");
});

module.exports = app;

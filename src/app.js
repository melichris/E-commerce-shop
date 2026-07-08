const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("MeliWear API is alive and watching!");
});

app.use("/api/auth", require("./routes/authRoutes"));

module.exports = app;

require("dotenv").config();
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("MeliWear API is alive and watching!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

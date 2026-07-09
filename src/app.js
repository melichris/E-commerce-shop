const express = require("express");
const app = express();
const { errorHandler, notFound } = require("./middleware/errorMiddleware");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("MeliWear API is alive and watching!");
});

app.use("/api/auth", require("./routes/authRoutes"));

app.use(notFound);
app.use(errorHandler);

module.exports = app;

const express = require("express");
const app = express();
const { errorHandler, notFound } = require("./middleware/errorMiddleware");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("MeliWear API is alive and watching!");
});

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/products", require("./routes/productRoutes"));
app.use("/api/categories", require("./routes/categoryRoutes"));
app.use("/api/orders", require("./routes/orderRoutes"));

app.use(notFound);
app.use(errorHandler);

module.exports = app;

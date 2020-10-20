const express = require("express");
const dotenv = require("dotenv");
const db = require("./config/db");
const productRoutes = require("./routes/products");

//envirment var
dotenv.config();

//db
db();

//app
const app = express();

//routes
app.use("/api/products", productRoutes);

app.use((req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
});

//error middlewares
app.use((err, req, res, next) => {
  const errorStatusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(errorStatusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
  next();
});

const PORT = process.env.PORT || 5000;
//port
app.listen(5000, console.log(`Yeah on ${PORT}`));

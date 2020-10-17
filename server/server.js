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
app.use("api/products", productRoutes);

const PORT = process.env.PORT || 5000;
//port
app.listen(5000, console.log(`Yeah on ${PORT}`));

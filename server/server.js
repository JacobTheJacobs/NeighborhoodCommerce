const express = require("express");
const dotenv = require("dotenv");

//envirment var
dotenv.config();

//app
const app = express();

const PORT = process.env.PORT || 5000;
//port
app.listen(5000, console.log(`Yeah on ${PORT}`));

const dotenv = require("dotenv").config();
require("./DB/conn");
const express = require("express");
const app = express();

const port = process.env.PORT || 3000;
// Route Calling
const homeRoute = require("./routes/user");

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.set("views", "views");

// Routes
app.use(homeRoute);

// Server Listening
app.listen(port, () => {
  console.log(`Server Listening on http://localhost:${port}`);
});

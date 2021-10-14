const dotenv = require("dotenv").config();
require("./DB/conn");
const express = require("express");
const app = express();
const path = require("path");

const port = process.env.PORT || 3000;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", "views");
// Route Calling
const homeRoute = require("./routes/user");

// Routes
app.use(homeRoute);

// Server Listening
app.listen(port, () => {
  console.log(`Server Listening on http://localhost:${port}`);
});

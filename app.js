// Import required modules
const express = require("express");
const path = require("path");
const methodOverride = require("method-override");
const mysql = require("mysql2");
const bcrypt = require("bcrypt");
const ejsMate = require("ejs-mate");
require("dotenv").config();

// Initialize Express app
const app = express();
const port = process.env.PORT || 8000;

// Create MySQL connection
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// Middleware setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);

app.get("/", (req, res) => {
  res.render("./file/home.ejs");
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/`);
});



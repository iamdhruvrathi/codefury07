// Import required modules
const express = require("express");
const path = require("path");
const methodOverride = require("method-override");
const mysql = require("mysql2");
const bcrypt = require("bcrypt");
const ejsMate = require("ejs-mate");


const app = express();
const port = 8000; // You can set this to any desired port


const connection = mysql.createConnection({
  host: "mysql-2e295e01-noob-8b4e.k.aivencloud.com",
  user: "avnadmin",
  database: "defaultdb",
  password: "AVNS_a4Q4yFt1nVXs8YrHqVD",
  port: 11699,
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

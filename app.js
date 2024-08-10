const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const mysql = require("mysql2");
const bcrypt = require("bcrypt");
const port = 8080;


const connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  database: "ieee",
  password: "adarsh1947",
  port: 3306,
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:8080/`);
});


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());




app.get("/", (req, res) => {
  res.render("file/home.ejs");
});

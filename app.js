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

app.get("/login", (req, res) => {
  res.render("file/signin");
});


app.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  // Hash the password before storing it
  const hashedPassword = await bcrypt.hash(password, 10);

  const sql =
    "INSERT INTO user_info (username, email, password) VALUES (?, ?, ?)";
  connection.query(sql, [username, email, hashedPassword], (err, result) => {
    if (err) {
      console.error("Error inserting user: " + err.message);
      res.status(500).send("Error registering user");
      return;
    }
    console.log("User registered successfully");
    res.redirect("/login");
  });
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  // Verify user credentials
  const sql = "SELECT * FROM user_info WHERE username = ?";
  connection.query(sql, [username], async (err, result) => {
    if (err) {
      console.error("Error logging in: " + err.message);
      res.status(500).send("Error logging in");
      return;
    }

    if (result.length === 0) {
      res.status(404).send("Invalid username or password");
      return;
    }

    const user = result[0];
    const passwordIsValid = await bcrypt.compare(password, user.password);

    if (!passwordIsValid) {
      res.status(404).send("Invalid username or password");
      return;
    }

    console.log("User logged in successfully");
    res.render("file/user_home", { username });
  });
});

const express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var session = require("express-session");
const app = express();
const port = 3000;
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
//setup public folder
app.use(express.static("public"));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
// sessions
app.use(
  session({
    secret: "132c4a71b767b874948afbd00fe1085c",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

app.get("/", function (req, res) {
  res.render("pages/home");
});

app.listen(port, () => console.log(`Server Started on port ${port}!`));

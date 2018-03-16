// Dependencies
var express = require("express");
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");
var mysql = require ("mysql");
var methodOverride = require('method-override')


var connection = require ("./config/connection.js")
var router = require("./controllers/burgers_controller.js")
var burger = require("./models/burger.js");

// Create an instance of the express app.
var app = express();

app.use(express.static("public"));

// db.sequelize.sync().then(function(){
//   app.listen(PORT, function(){
//     console.log();
//   });
// });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("app/public"));

app.use(bodyParser.json());

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use("/", router);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
console.log("Server listening on: http://localhost:" + PORT);
});



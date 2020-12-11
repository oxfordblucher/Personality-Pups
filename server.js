// *********************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
// *********************************************************************************
require('dotenv').config();
const path = require("path");

// Dependencies
// =============================================================
var express = require("express");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("app/public"));
app.set('views', path.join(__dirname, '/app/views'));

// Set Handlebars.
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const hbs = exphbs.create({});

hbs.handlebars.registerHelper('json', function(context) {
  return JSON.stringify(context);
});

// Routes
// =============================================================
require("./app/routes/results-api-routes.js")(app);
require("./app/routes/user-api-routes.js")(app);
require("./app/routes/dogs-api-routes.js")(app);
require("./app/routes/html-routes.js")(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on http://localhost:" + PORT);
});

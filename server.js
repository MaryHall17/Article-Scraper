var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var axios = require("axios");
var cheerio = require("cheerio");

var app = express();

var db = require("./models");
console.log(db);

var PORT = process.env.PORT || 8080; 

var scrape = require("./scripts/Scrape");

app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: false}));
app.use(express.static("public"));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

var fetch = require("./controllers/fetch.js")
var note = require("./controllers/note.js")

app.use("/", fetch)
app.use("/", note)


//Heroku logic to perfect:
// var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/Headlines";

// mongoose.Promise = Promise;
// mongoose.connect(MONGODB_URI, {
// 	useMongoClient: true
// });

mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/Headlines", {
	// useMongoClient: true
});

app.listen(PORT, function() {
	console.log("App is listening on PORT: " + PORT);
});
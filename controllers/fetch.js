var express = require("express");

var router = express.Router();
var scrape = require("../scripts/scrape.js");
var db = require("../models/index.js");
// console.log("Routes: " + db);



	router.get("/scrape", function(req, res) {
		db.Headline.create(scrape())
			.then(function(dbHeadline) {
				console.log("scrape " + dbHeadline);
				res.send("Scrape complete");
			})
			.catch(function(err) {
				return res.json(err);
			});

		// res.send("Scrape complete");

	});

	router.get("/headlines", function(req, res) {

		db.Headline.find({})
			.then(function(dbHeadline) {
				// res.json(dbHeadline);
				res.render("home", {headline: dbHeadline});
			})
				.catch(function(err) {
					res.json(err);
				});
		
	});

	module.exports = router;
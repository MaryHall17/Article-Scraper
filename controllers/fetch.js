var express = require("express");

var router = express.Router();
var scrape = require("../scripts/Scrape");
var db = require("../models/index.js");
console.log("Routes: " + db);



	router.get("/scrape", function(req, res) {
		db.Headline.create(scrape.result)
			.then(function(dbHeadline) {
				console.log(dbArticle);
			})
			.catch(function(err) {
				return res.json(err);
			});

		res.send("Scrape complete");

	});

	router.get("/headlines", function(req, res) {

		db.Headline.find({})
			.then(function(dbHeadline) {
				res.json(dbHeadline);
			})
				.catch(function(err) {
					res.json(err);
				});
		
	});

	module.exports = router;
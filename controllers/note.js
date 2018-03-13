var express = require("express");

var router = express.Router();
var scrape = require("../scripts/Scrape");
var db = require("../models/index.js");


	router.post("/headlines/:id", function(req, res) {
		db.Note.create(req.body)
			.then(function(dbNote) {
				return db.Headline.findOneAndUpdate({ _id: req.params.id }, { note: db.Note._id }, { new: true 
			});
		})
			.then(function(dbHeadline) {
				res.json(dbHeadlie);
			})
			.catch(function(err) {
				res.json(err)
			});
		});

	module.exports = router;
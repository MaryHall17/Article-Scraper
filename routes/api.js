var scrape = require("../scripts/Scrape");
var db = require("../models/index.js");
console.log("Routes: " + db);

module.exports = function (app) {

	app.get("/scrape", function(req, res) {
		db.Headline.create(scrape.result)
			.then(function(dbHeadline) {
				console.log(dbArticle);
			})
			.catch(function(err) {
				return res.json(err);
			});

		res.send("Scrape complete");

	});

	// app.get("/articles", function(req, res) {
		
	// })

};
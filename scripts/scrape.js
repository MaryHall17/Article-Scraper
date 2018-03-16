var axios = require("axios");
var cheerio = require("cheerio");
var db = require("../models/index.js");
// console.log("scrape " + db);
// console.log(db);

// var headlines = {}; 

var Scrape = axios.get("https://nytimes.com").then(function(response){

	var $ = cheerio.load(response.data);

		$("article h1").each(function(i, element){
			//Save an empty result object

			//Add the text and href of each link
			var result = {};
			// console.log("this " + $(this).text());
			result.title = $(this)
			// .children("a")
			.text();
			// console.log("this " + result.title)
			result.summary = $(this)
			.siblings().text();
			result.link = $(this)
			.children("a")
			.attr("href");
			// console.log(result);

			// headlines.push(result);

			// Create an Article using the result object
		var headlines =	db.Headline.create(result)
				.then(function(dbHeadline){
					// console.log("create" + dbHeadline);
				})
				.catch(function(err){
					return res.json(err);
				});
	
		});
		// res.send("Scrape Complete")
		// return headlines;

	});




module.exports = Scrape;


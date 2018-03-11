var axios = require("axios");
var cheerio = require("cheerio");

var Scrape = axios.get("https://nytimes.com/").then(function(response){

	var $ = cheerio.load(response.data);

	$("article h1").each(function(i, element){
		//Save an empty result object

		//Add the text and href of each link
		var result= {};

		result.title = $(this)
			.children("a")
			.text();
		result.link = $(this)
			.children("a")
			.attr("href");
			console.log(result);

			//Create an Article using the result object
			// db.Article.create(result)
			// 	.then(function(dbArticle){
			// 		console.log(dbArticle);
			// 	})
			// 	.catch(function(err){
			// 		return res.json(err);
			// 	});

	});
	// res.send("Scrape Complete");

});



module.exports = Scrape;


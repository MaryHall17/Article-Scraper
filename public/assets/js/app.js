$(function() {
	$("#article").on("click", function(event) {
		var id = $(this).data("id");
		var article = {
			title: $(this).data("title"),
			summary: $(this).data("summary"),
			link: $(this).data("saved")
		};

		$.ajax("/saved/" + id, {
			type: "POST",
			data: article
		}).then(
			function () {
				console.log("article was saved");
			})
	})
}



$(document).on("click", "p", function() {
	$("#notes").empty();

	var thisId = $(this).attr("data-id");

	$.ajax({
		method: "GET",
		url: "/headlines/" + thisId
	})
	.then(function(data) {
		console.log(data);
		$("#notes").append("<h2>" + data.title + "</h2>");
		$("#notes").append("<input id='titleinput' name='title >");
		$("#notes").append("<textarea id='bodyinput' name='body'></textarea>");
		$("#notes").append("<button data-id='" + data._id + "' id='savenote'>Save Note</button>");

		if (data.note) {
			$("#titleinput").val(data.note.title);
			$("#bodyinput").val(data.note.body);
		}
	});
});

//Save note button
$(document).on("click", "#savenote", function() {
	var thisId = $(this).attr("data-id");
	console.log("button clicked");

	$.ajax({
		method: "POST",
		url: "/headlines/" + thisId,
		data: {
			title: $("#titleinput").val(),
			body: $("#bodyinput").val(),
		}
	})
		.then(function(data) {
			console.log(data);
			$("#notes").empty();
		});

		$("#titleinput").val("");
		$("#bodyinput").val("");
});
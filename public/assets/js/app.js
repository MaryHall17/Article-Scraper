$(document).ready(function() {
	$.getJSON("/headlines", function(data) {
	for (var i = 0; i < data.length; i++) {
		$("#headlines").append("<p data-id='" + data[i].id + "'>" + data[i].title + "<br />" + data[i].link + "</p>");
		}
	});
	console.log("ready");

});



// $(document).on("click", "p", function() {
// 	$("#notes").empty();

// 	var thisId = $(this).attr("data-id");

// 	$.ajax({
// 		method: "GET",
// 		url: "/headlines/" + thisId
// 	})
// 	.then(function(data) {
// 		console.log(data);
// 		$("#notes").append("<h2>" + data.title + "</h2>");
// 		$("#notes").append("<input id='titleinput' name='title >");
// 		$("#notes").append("<textarea id='bodyinput' name='body'></textarea>");
// 		$("#notes").append("<button data-id='" + data._id + "' id='savenote'>Save Note</button>");

// 		if (data.note) {
// 			$("#titleinput").val(data.note.title);
// 			$("#bodyinput").val(data.note.body);
// 		}
// 	});
// });

// //Save note button
// $(document).on("click", "#savenote", function() {
// 	var thisId = $(this).attr("data-id");

// 	$.ajax({
// 		method: "POST",
// 		url: "/headlines/" + thisId,
// 		data: {
// 			title: $("#titleinput").val(),
// 			body: $("#bodyinput").val(),
// 		}
// 	})
// 		.then(function(data) {
// 			console.log(data);
// 			$("#notes").empty();
// 		});

// 		$("#titleinput").val("");
// 		$("#bodyinput").val("");
// });
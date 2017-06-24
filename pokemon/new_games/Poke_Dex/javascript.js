$(document).ready(function() {

$("#Pikachu").click(function() {
	$("#info").text("Pikachu");
	$("#Pikachu").css("background-color", "red");
	$("#Kyurem").css("background-color", "white");
	$("#Giratina").css("background-color", "white");
	$("#Zekrom").css("background-color", "white");
	$("#Reshiram").css("background-color", "white");
	$("#Mewtwo").css("background-color", "white");
});
$("#Kyurem").click(function() {
	$("#info").text("Kyurem");
	$("#Pikachu").css("background-color", "white");
	$("#Kyurem").css("background-color", "red");
	$("#Giratina").css("background-color", "white");
	$("#Zekrom").css("background-color", "white");
	$("#Reshiram").css("background-color", "white");
	$("#Mewtwo").css("background-color", "white");
});
});
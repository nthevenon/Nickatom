$(document).ready(function() {
var score = 0;

$("#startgame").click(function() {
  $("div").css("display", "block");
  $("button").css("display", "none");
})

$("#ball").click(function() {
  score++;
  $("#score").html("SCORE: " + score.toString());
  $("#ball").animate({
    width: "200px",
    height: "200px"
  }, 50);
  $("#ball").animate({
    width: "150px",
    height: "150px"
  }, 50);
})
});
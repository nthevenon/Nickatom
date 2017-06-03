$(document).ready(function() {
var score = 0;
var incrementSec = 0;
var increment = 1;
var activate = false;

$("#startgame").click(function() {
  $("div").css("display", "block");
  $("button").css("display", "none");
});

$("#ball").click(function() {
  score += increment;
  $("#score").html("SCORE: " + score.toString());
  $("#ball").animate({
    width: "200px",
    height: "200px"
  }, 50);
  $("#ball").animate({
    width: "150px",
    height: "150px"
  }, 50);
});
$("#potion1").click(function(){
  if (score >= 150) {
    increment++;
    score -= 150;
    $("#score").html("SCORE: " + score.toString());
  }
});
$("#potion2").click(function(){
  if (score >= 750) {
    incrementSec++;
    score -= 750;
    $("#score").html("SCORE: " + score.toString());
  }
});
setInterval(function(){
  score += incrementSec;
  $("#score").html("SCORE: " + score.toString());
  console.log("WORKS")
}, 1000);
setInterval(function(){
  if(activate) {
    // meowth appears random position (top and left)
    $("special").css("top", function() {
        var rand = Math.ceil(Math.random() * $( window ).height());
        return rand;
    })
    $("special").css("left", function() {
        var rand = Math.ceil(Math.random() * $( window ).width());
        return rand;
    })
    // meowth to appear

    // meowth animate (aka to move around)
  }
})
});
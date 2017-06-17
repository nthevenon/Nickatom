$(document).ready(function() {
//My long list of var
var score = 0;
var incrementSec = 0;
var increment = 1;
var activate = false;
var countdown = -1;
var percentage = 0;

$("#startgame").click(function() {
  $("div").css("display", "block");
  $("button").css("display", "none");
});

$("#ball").click(function() {
  score += increment;
  console.log(increment);
  $("#score").html("SCORE: " + score.toString());
  $("#ball").animate({
    width: "300px",
    height: "300px"
  }, 50);

  $("#ball").animate({
    width: "250px",
    height: "250px"
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

$("#potion3").click(function() {
 if (score >= 3000) {
  countdown = 30;
  percentage++;
  score -= 3000;
  if (percentage == 1) {
    progress(33);
    //put in a src
    $("#finalpoke").attr("src", "http://fr.ubergizmo.com/wp-content/uploads/2013/01/Pokeball.png");
    //change opacity
    $("#finalpoke").css("opacity", "0.3");
    //set the img display to block
    $("#finalpoke").css("display", "block");
  }
   else if (percentage == 2) {
    progress(67);
    //change opacity
    $("#finalpoke").css("opacity", "0.7");
  }
   else if (percentage == 3) {
    progress(100);
    //change src
    $("#finalpoke").attr("src", "http://orig10.deviantart.net/0639/f/2011/134/6/5/pokemon_pokeball_pichu_by_kevintut-d3gallt.gif");
    //change opacity
    $("#finalpoke").css("opacity", "1");
  }
 }
});
setInterval(function() {
  if(countdown > 0) {
    increment *= 2;
    incrementSec *= 2;
    countdown--;
  } else if(countdown == 0) {
    increment /= 2;
    incrementSec /= 2;
    countdown--;
  }
}, 1000);

function progress(percent) {
  var progressBarWidth = percent * $("#progressBar").width() / 100;
  $('#progressBar').find('div').animate({
    width: progressBarWidth
  }, 200).html(percent + "% ");
}
});










$(document).ready(function() {

var score = 0;

$('button').click(function() {
  $('h1').html("");
  $('button').css("height", "0px");
  $('button').css("width", "0px");
  $('button').css("visibility", "hidden");
  $("#gameBox").css("height", "750px");
  $("#gameBox").css("width", "100%");
  $("#gameBox").css("visibility", 'visible');
  $("#gameBox").css("backgroundColor", "");
  $("#menuBar").css("display", 'block');
  imageDrop();
})
$('.bombe').click(function() {
  $("#gameOver2").css("display", "center");
  $("#gameBox").css("display", "none");
  display(false);
})
$('.pokeball').click(function() {
  score++;
  $("#score").html("SCORE: " + score.toString());
})

function imageDrop() {
  var bool = 0;
  $('.pokeball').css('top', '40px');
  $('.pokeball').css('left', generateRandomWidth().concat('px'));
  $('.bombe').css('top', '40px');
  $('.bombe').css('left', generateRandomWidth().concat('px'));
  while (bool <= 100) {
    $(".pokeball").animate({
      top: "700px"
    }, 1500);
    $(".bombe").animate({
      top: "700px"
    }, 1500);
    $(".pokeball").animate({
      top: "60px",
      left: generateRandomWidth().concat('px')
    }, 0);
    $(".bombe").animate({
      top: "60px",
      left: generateRandomWidth().concat('px')
    }, 0);
    bool++;
  }
  display(true);
}

function generateRandomWidth() {
  var width = parseInt(Math.random() * (parseInt($('#gameBox').width()) - 140));
  return width.toString();
}

function display(isWin) {
  if (isWin) {
    $("#finalDisplay1").attr("src", "http://poster.keepcalmandposters.com/2068580.png"); //Winning image
  } else {
    console.log("Lose");
    $("#finalDisplay2").attr("src", "http://wallpapercave.com/wp/RMIs0gk.png"); //Losing image
  }
}
});
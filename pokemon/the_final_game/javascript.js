$(document).ready(function() {
$("#pokeball1").css('opacity', '1').delay(2000).show(function() {
  progress(20);
  $("#pokeball2").css('opacity', '1').delay(2000).show(function() {
    progress(40);
    $("#pokeball3").css('opacity', '1').delay(2000).show(function() {
      progress(60);
      $("#pokeball4").css('opacity', '1').delay(2000).show(function() {
        progress(80);
        $("#pokeball5").css('opacity', '1').delay(2000).show(function() {
          progress(100);
          $(".pokeball").css("width", "0px");
          $(".pokeball").css("height", "0px");
          $(".pokeball").css("display", "none");
          $(".buttonMenu").css("display", "display");
          $(".buttonMenu").css("visibility", "visible");
          $("#titleMenu").css("display", "block");
          $("#titleMenu").css("visibility", "visible");

        })
      })
    })
  })
})
$("button").click(function() {
  $("h1").css('visibility', 'visible');
  $("h2").css('visibility', 'visible');
})


var mousetimeout;
var screensaver_active = false;
var idletime = 10;

function show_screensaver() {
  $('#screensaver').fadeIn();
  screensaver_active = true;
  screensaver_animation();
}

function stop_screensaver() {
  $('#screensaver').fadeOut();
  screensaver_active = false;
}

function screensaver_animation() {
  if (screensaver_active) {
    $("#screensaver").animate({
      backgroundColor: changeColor()
    }, 400, screensaver_animation);
  }
}

function changeColor() {
  myColor = "rgb(" + randomNumber() + ", " + randomNumber() + ", " + randomNumber() + ")";
  return myColor;
}

function randomNumber() {
  return Math.floor(Math.random() * 256);
}

$(document).mousemove(function() {
  clearTimeout(mousetimeout);

  if (screensaver_active) {
    stop_screensaver();
  }
  mousetimeout = setTimeout(show_screensaver, 1000 * idletime);
});

function progress(percent) {
  var progressBarWidth = percent * $("#progressBar").width() / 100;
  $('#progressBar').find('div').animate({
    width: progressBarWidth
  }, 200).html(percent + "% ");
}
});
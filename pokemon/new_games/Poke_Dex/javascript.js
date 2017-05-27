$(document).ready(function() {
var pokemon = "";

$("#squirtle").click(function() {
  pokemon = "squirtle";
  $("#squirtle").animate({
    width: "150px",
    height: "150px"
  }, 1000);
})

$("#emboar").click(function() {
  pokemon = "emboar";
  $("#emboar").animate({
    width: "150px",
    height: "150px"
  }, 1000);
})

$("#vulpix").click(function() {
  pokemon = "vulpix";
  $("#vulpix").animate({
    width: "150px",
    height: "150px"
  }, 1000);
})

$("#jolteon").click(function() {
  pokemon = "jolteon";
  $("#jolteon").animate({
    width: "150px",
    height: "150px"
  }, 1000);
})

$("#vaporean").click(function() {
  pokemon = "vaporean";
  $("#vaporean").animate({
    width: "150px",
    height: "150px"
  }, 1000);
})

$("#vaporeanName").click(function() {
  if (pokemon == "vaporean") {
    $("#vaporeanName").html("");
    $("#vaporean").css("display", "none");
  }
})

$("#emboarName").click(function() {
  if (pokemon == "emboar") {
    $("#emboarName").html("");
    $("#emboar").css("display", "none");
  }
})

$("#squirtleName").click(function() {
  if (pokemon == "squirtle") {
    $("#squirtleName").html("");
    $("#squirtle").css("display", "none");
  }
})

$("#vulpixName").click(function() {
  if (pokemon == "vulpix") {
    $("#vulpixName").html("");
    $("#vulpix").css("display", "none");
  }
})

$("#jolteonName").click(function() {
  if (pokemon == "jolteon") {
    $("#jolteonName").html("");
    $("#jolteon").css("display", "none");
  }
})
$("button").click(function() {
  $("button").animate({
    width: "150px",
    height: "150px"
  }, 1000);
})
});
$(document).ready(function() {
var pokeList = new Array(7);
var correctAnswer = "";
var count = 0;

for (var i = 0; i < 7; i++) {
  var value = Math.ceil(Math.random() * 7);
  if (i == 0) {
    pokeList[0] = value;
  } else {
    while (pokeList.indexOf(value) != -1) {
      value = Math.ceil(Math.random() * 7);
    }
    pokeList[i] = value;
  }
}

$("#iframestart").click(function() {
  console.log("hello");
  $("#buttondiv").css('display', 'block');
  $("#iframestart").css('display', 'none');
  $("#iframe").attr("src", "https://www.youtube.com/embed/05dutFth61w?autoplay=1");
  console.log("test");
});

$("#iframestop").click(function() {
  $("#buttondiv").css('display', 'none');
  $("#gamePlay").css('display', 'block');
  $("#iframe").attr("src", "")

  inputpicture(pokeList[0]);
  $("#pic").css("display", "block");
})

$("#submitButton").click(function() {

  var ans = document.getElementById("inputid").value;
  document.getElementById("inputid").value = "";
  if (count == 6) {
    $("#gamePlay").css('display', 'none');
    $("#imggamefinish").attr('src', "http://poster.keepcalmandposters.com/29049.png");
    $("#imggamefinish").css('display', 'block');
    $("#imggamefinish").css('align', 'center');
    $("#imggamefinish").css('height', '900px');
    $("#imggamefinish").css('width', '600px');
  } else if (ans == pokeName(pokeList[count])) {
    count++;
    inputpicture(pokeList[count]);
  }
})

function pokeName(randomImg) {
  if (randomImg == 1) {
    return "Charmander";
  }
  if (randomImg == 2) {
    return "Pikachu";
  }
  if (randomImg == 3) {
    return "Emboar";
  }
  if (randomImg == 4) {
    return "Swinub";
  }
  if (randomImg == 5) {
    return "Mankey";
  }
  if (randomImg == 6) {
    return "Drowzee";
  }
  if (randomImg == 7) {
    return "Zapdos";
  }
}

function inputpicture(randomImg) {
  if (randomImg == 1) {
    $("#pic").attr("src", "http://vignette4.wikia.nocookie.net/pokemon/images/9/9b/004Charmander_AG_anime.png/revision/latest?cb=20140603214916");
    console.log("Poke1");
  }
  if (randomImg == 2) {
    $("#pic").attr("src", "http://www.officialpsds.com/images/thumbs/Pikachu-psd110416.png")
    console.log("Poke2");
  }
  if (randomImg == 3) {
    $("#pic").attr("src", "http://img04.deviantart.net/7ff5/i/2014/201/8/b/emboar___the_mega_fire_pig_pokemon__by_realscyler-d7rl3y2.png");
    console.log("Poke3");
  }
  if (randomImg == 4) {
    $("#pic").attr("src", "http://cdn.bulbagarden.net/upload/thumb/b/b5/220Swinub.png/250px-220Swinub.png");
    console.log("Poke4");
  }
  if (randomImg == 5) {
    $("#pic").attr("src", "http://cdn.bulbagarden.net/upload/thumb/4/41/056Mankey.png/250px-056Mankey.png");
    console.log("Poke5");
  }
  if (randomImg == 6) {
    $("#pic").attr("src", "http://cdn.bulbagarden.net/upload/thumb/3/3e/096Drowzee.png/250px-096Drowzee.png");
    console.log("Poke6");
  }
  if (randomImg == 7) {
    $("#pic").attr("src", "http://vignette1.wikia.nocookie.net/pokemon/images/a/ae/145Zapdos_AG_anime.png/revision/latest?cb=20140214165857");
    console.log("Poke7");
  }
}
});
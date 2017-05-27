$(document).ready(function() {
var popSound = document.createElement("AUDIO");
popSound.src = "http://j.mp/BubblePopSound";

function pop() {
  event.target.src = "http://vignette4.wikia.nocookie.net/pokemon/images/2/26/133Eevee_Pokemon_Mystery_Dungeon_Red_and_Blue_Rescue_Teams.png/revision/latest?cb=20150106012220";
  popSound.play();
}

function resetButton() {
  var images = document.getElementsByTagName("IMG");
  for (var i = 0; i < images.length; i++)
    images[i].src = "https://upload.wikimedia.org/wikipedia/en/3/39/Pokeball.PNG";
}
});
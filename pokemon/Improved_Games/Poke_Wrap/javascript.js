$(document).ready(function() {
	$(".pokeball").click(function() {
		var pokemon = Math.ceil(Math.random() * 10);
		$(this).attr('src','../../../Assets/P' + pokemon +'.png');
	});
});
var popSound = document.createElement("AUDIO");
popSound.src = "http://j.mp/BubblePopSound";
function pop() {
  popSound.play();
}
function resetButton() {
	var images = document.getElementsByTagName("IMG");
	for (var i = 0; i < images.length; i++) {
		images[i].src = "../../../Assets/Pokeball.PNG";
	}
}
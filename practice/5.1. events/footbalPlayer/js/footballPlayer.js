var player = document.querySelector("img");
var body = document.querySelector("body");
var button = document.querySelector("button");

var movePlayer = function() {
  player.style.top = event.clientY + "px";
  player.style.left = event.clientX + "px";
};

body.addEventListener("click", movePlayer);

var stopPlayer = function() {
  body.removeEventListener("click", movePlayer);
};

button.addEventListener("click", stopPlayer);

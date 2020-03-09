var body = document.querySelector("body");
var runMario = document.querySelector("#run");
var standMario = document.querySelector("#stand");
var value = 0;

var backMove = function(event) {
  body.style.backgroundPosition = value + "px 0px";
};

var runningMario = function(event) {
  if (event.keyCode === 39) {
    runMario.className = "active";
    standMario.className = "no-active";

    value--;
    value--;
    setInterval(backMove, 40);
  }
};

var standingMario = function(event) {
  runMario.className = "no-active";
  standMario.className = "active";
};

var runningLeft = function(event) {
  if (event.keyCode === 37) {
    runMario.className = "active left";
    standMario.className = "no-active";

    value++;
    value++;
    setInterval(backMove, 40);
  }
};

var standingleft = function(event) {
  if (event.keyCode === 37) {
    runMario.className = "no-active";
    standMario.className = "active left";
  }
};

var jump = function(event) {
  if (event.keyCode === 32) {
    standMario.className = "jump";
    runMario.className = "no-active";
  }
};

body.addEventListener("keydown", runningMario);
body.addEventListener("keyup", standingMario);
body.addEventListener("keydown", runningLeft);
body.addEventListener("keyup", standingleft);
body.addEventListener("keydown", jump);
body.addEventListener("keydown", squat);

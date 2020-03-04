var body = document.querySelector("body");
var marioRun = document.querySelector("#run");
var marioStand = document.querySelector("#stand");
var value = 0;
var interval;

var backMove = function() {
    body.style.backgroundPosition = value + "px 0px";
};

var moveMario = function(event) {
    if (event.keyCode === 39) {
        marioRun.className = "active";
        marioStand.className = "no-active";
        value--;
        setInterval(backMove, 100);
    }
};

var stopMario = function(event) {
    if (event.keyCode === 39) {
        marioRun.className = "no-active";
        marioStand.className = "active";
    }
};

var moveLeft = function(event) {
    if (event.keyCode === 37) {
        marioRun.className = "active left";
        marioStand.className = "no-active left";
        value++;
        setInterval(backMove, 100);
    }
};

var stopLeft = function(event) {
    if (event.keyCode === 37) {
        marioRun.className = "no-active left";
        marioStand.className = "active left";
    }
};

var jump = function(event) {
    if (event.keyCode === 32) {
        marioStand.className = "jump";
    }
};

var jumpBack = function(event) {
    if (event.keyCode === 32) {
        marioStand.classList.remove("jump");
    }
};

body.addEventListener("keydown", moveMario);
body.addEventListener("keyup", stopMario);

body.addEventListener("keydown", moveLeft);
body.addEventListener("keyup", stopLeft);

body.addEventListener("keydown", jump);
body.addEventListener("keyup", jumpBack);
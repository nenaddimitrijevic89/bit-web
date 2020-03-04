var run = document.querySelector("#move");
var stand = document.querySelector("#stand");
var body = document.querySelector("body");
var value = 0;
var interval;

var moveImage = function () {
    body.style.backgroundPosition = value + "px 0px";
}


var move = function (event) {
    if (event.keyCode === 39) {
        stand.className = "no-active";
        run.className = "active";
        value--;
        interval = setInterval(moveImage, 50);
    }
}

var stop = function (event) {
    if (event.keyCode === 39) {
        run.className = "no-active";
        stand.className = "active";
    }
}


var moveLeft = function (event) {
    if (event.keyCode === 37) {
        stand.className = "no-active";
        run.className = "active left";
        value++;
        interval = setInterval(moveImage, 50);
    }
}

var stopLeft = function (event) {
    if (event.keyCode === 37) {
        run.className = "no-active";
        stand.className = "active left";
    }
}


body.addEventListener("keydown", move);
body.addEventListener("keyup", stop);
body.addEventListener("keydown", moveLeft);
body.addEventListener("keyup", stopLeft);





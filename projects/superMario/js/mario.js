var run = document.querySelector("#move");
var stand = document.querySelector("#stand");
var body = document.querySelector("body");

body.onkeydown = function (event) {
    if (event.keyCode === 39) {
        stand.className = "no-active";
        run.className = "active";
    }
}

body.onkeyup = function (event) {
    if (event.keyCode === 39) {
        run.className = "no-active";
        stand.className = "active";
    }
}





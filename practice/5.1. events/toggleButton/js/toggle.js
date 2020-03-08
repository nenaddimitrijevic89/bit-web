var button = document.querySelector("button");
var body = document.querySelector("body");

function changeBackColor() {
  var div = document.querySelector("div");
  div.classList.toggle("active");
}

function turnOff() {
  var button = document.querySelector("button");
  button.removeAttribute("onclick");
}

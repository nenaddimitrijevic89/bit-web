var submit = document.querySelector("#submit");

submit.onclick = function() {
  var div = document.querySelector("div");
  var input = document.querySelector("#chat");
  var text = document.createTextNode(input.value);
  var par = document.createElement("p");
  par.appendChild(text);
  div.appendChild(par);
  input.value = "";
};

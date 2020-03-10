
var button = document.querySelector("button");
button.onclick = function () {
    var request = new XMLHttpRequest();
    request.open("GET", "https://dog.ceo/api/breeds/image/random");
    request.send();

    request.onload = function () {
        var data = JSON.parse(request.responseText);
        var div = document.querySelector("div");
        var img = document.createElement("img");
        var body = document.querySelector("body")
        img.setAttribute("src", data.message);
        div.appendChild(img)
        body.appendChild(div);
    }
}



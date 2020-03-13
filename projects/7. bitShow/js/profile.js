let a = window.location.search;
let urlId = a.slice(a.length - 1);
console.log(urlId)
let body = document.querySelector("body");

let request = new XMLHttpRequest();
request.open("GET", "http://api.tvmaze.com/shows/" + urlId);
request.send();

request.onload = function () {
    let data = JSON.parse(request.responseText);
    console.log(data);
    let title = document.createElement("div");
    let img = document.createElement("img");
    img.setAttribute("src", data.image.original)
    title.appendChild(img);
    body.appendChild(title);

}
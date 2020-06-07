let urlId = window.location.search;
let id = urlId.slice(4)
let imgDiv = document.querySelector(".image");
let about = document.querySelector(".about");
let name = document.querySelector("h1");
let species = document.querySelector("#species");
let gender = document.querySelector("#gender")
let type = document.querySelector("#type");
let loc = document.querySelector("#location");
let status = document.querySelector("#status");

let request = new XMLHttpRequest();
request.open("GET", `https://rickandmortyapi.com/api/character/${id}`);
request.send();

request.onload = function() {
    let data = JSON.parse(request.responseText);
    console.log(data);
    let img = document.createElement("img");
    img.setAttribute("src", data.image);
    imgDiv.appendChild(img);
    name.textContent = data.name;
    species.textContent = data.species;
    gender.textContent = data.gender;
    type.textContent = data.type;
    loc.textContent = data.location.name;
    status.textContent = data.status;

}
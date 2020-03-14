let a = window.location.search;

let urlId = (function index() {
    for (let i = 0; i < a.length; i++) {
        if (a[i] === "=") {
            return a.slice(i + 1);
        }
    }
})();
console.log(urlId);

let poster = document.querySelector(".poster");
let about = document.querySelector(".about");
let season = document.createElement("h3");
let ulSeason = document.createElement("ul");
let cast = document.createElement("h3");
let ulCast = document.createElement("ul");
let description = document.querySelector(".description");

let request = new XMLHttpRequest();
request.open("GET", `http://api.tvmaze.com/shows/${urlId}`);
request.send();

request.onload = function() {
    let data = JSON.parse(request.responseText);
    console.log(data);
    let title = document.createElement("div");
    let img = document.createElement("img");
    let h1 = document.querySelector("h1");
    img.className = "show-img";
    img.setAttribute("src", data.image.original);
    h1.textContent = data.name;
    title.appendChild(img);
    poster.appendChild(title);
    description.innerHTML = data.summary;
};

let seasonsRequest = new XMLHttpRequest();
seasonsRequest.open("GET", `http://api.tvmaze.com/shows/${urlId}/seasons`);
seasonsRequest.send();

seasonsRequest.onload = function() {
    let data = JSON.parse(seasonsRequest.responseText);
    console.log(data);
    season.textContent = `Seasons (${data.length})`;
    about.appendChild(season);
    about.appendChild(ulSeason);
    for (let i = 0; i < data.length; i++) {
        let li = document.createElement("li");
        li.textContent = `${data[i].premiereDate} - ${data[i].endDate}`;
        ulSeason.appendChild(li);
    }
};

let castRequest = new XMLHttpRequest();
castRequest.open("GET", `http://api.tvmaze.com/shows/${urlId}/cast`);
castRequest.send();

castRequest.onload = function() {
    let data = JSON.parse(castRequest.responseText);
    console.log(data);
    cast.textContent = "Cast";
    about.appendChild(cast);
    about.appendChild(ulCast);
    for (let i = 0; i < 10; i++) {
        let li = document.createElement("li");
        li.textContent = `${data[i].person.name} (${data[i].character.name})`;
        ulCast.appendChild(li);
    }
};
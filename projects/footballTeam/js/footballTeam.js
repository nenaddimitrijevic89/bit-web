var players = [{ name: "Sergi", lastname: "Puig", number: 1, img: "images/player1.jpg" },
{ name: "Dani", lastname: "Morer", number: 2, img: "images/player2.jpg" },
{ name: "Sergio", lastname: "Akieme", number: 18, img: "images/player3.jpg" },
{ name: "Guillem", lastname: "Jaime", number: 5, img: "images/player4.jpg" },
{ name: "Gerard", lastname: "Pique", number: 3, img: "images/player5.jpg" },
{ name: "Jordi", lastname: "Alba", number: 18, img: "images/player6.jpg" },
{ name: "Sergio", lastname: "Busquets", number: 5, img: "images/player7.jpg" },
{ name: "Frenkie", lastname: "deJong", number: 21, img: "images/player8.jpg" },
{ name: "Arturo", lastname: "Vidal", number: 22, img: "images/player9.jpg" },
{ name: "Luis", lastname: "Suarez", number: 9, img: "images/player10.jpg" },
{ name: "Lionel", lastname: "Messi", number: 10, img: "images/player11.jpg" },
{ name: "Antoine", lastname: "Griezmann", number: 17, img: "images/player12.jpg" },
{ name: "Martin", lastname: "Braithwaite", number: 19, img: "images/player13.jpg" },
{ name: "Ousmane", lastname: "Dembele", number: 11, img: "images/player14.jpg" },
{ name: "Ivan", lastname: "Rakitic", number: 4, img: "images/player15.jpg" }];


var randomNumber = function (numb) {
    return Math.floor(Math.random() * numb)
}

var firstTeam = document.querySelector("#first-team");
var secondTeam = document.querySelector("#second-team");


var generatePlayer = function (data) {
    var div = document.createElement("div");
    div.className = "players";
    var image = document.createElement("img");
    var name = document.createElement("h4")
    var last = document.createElement("h3");
    var number = document.createElement("h5");
    name.textContent = data.name;
    last.textContent = data.lastname;
    number.textContent = data.number;
    image.setAttribute("src", data.img);
    div.appendChild(image);
    div.appendChild(name);
    div.appendChild(last);
    div.appendChild(number);
    firstTeam.appendChild(div)
}

var generateReserve = function (data) {
    var div = document.createElement("div");
    div.className = "reservePlayers";
    var image = document.createElement("img");
    var name = document.createElement("h4")
    var last = document.createElement("h3");
    var number = document.createElement("h5");
    name.textContent = data.name;
    last.textContent = data.lastname;
    number.textContent = data.number;
    image.setAttribute("src", data.img);
    div.appendChild(image);
    div.appendChild(name);
    div.appendChild(last);
    div.appendChild(number);
    secondTeam.appendChild(div);
}
function swapPlaces() {
    var a = document.querySelectorAll("#first-team div");
    var randomn = randomNumber(a.length);
    secondTeam.appendChild(a[randomn]);

    var b = document.querySelectorAll("#second-team div");
    var randomb = randomNumber(b.length);
    firstTeam.appendChild(b[randomb]);
}
setInterval(swapPlaces, 1000)

for (var i = 0; i <= players.length;) {
    var ranNumb = randomNumber(players.length);
    if (players.length > 4) {
        generatePlayer(players[ranNumb]);
    } else {
        generateReserve(players[ranNumb])
    }
    players.splice(ranNumb, 1);
}

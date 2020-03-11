
var input = document.querySelector(".form-control");
var button = document.querySelector(".dugme");
var body = document.querySelector("body");
var div = document.querySelector(".profile")
var section = document.querySelector("section");

button.onclick = function () {
    section.innerHTML = "";
    div.innerHTML = "";
    var request = new XMLHttpRequest();
    request.open("GET", "https://api.github.com/search/users?q=" + input.value);
    request.send();

    request.onload = function () {

        var data = JSON.parse(request.responseText);
        for (var i = 0; i < data.items.length; i++) {
            var img = document.createElement("img");
            img.setAttribute("src", data.items[i].avatar_url);
            var name = document.createElement("h3");
            name.textContent = data.items[i].login;
            var profile = document.createElement("div");
            profile.className = "profiles col";
            profile.appendChild(img);
            profile.appendChild(name);
            div.appendChild(profile);
            input.value = "";
        }
        addClick();
    }
}
function addClick() {

    $(".profiles").on("click", function (event) {

        var user = event.currentTarget.querySelector("h3").textContent;

        var request1 = new XMLHttpRequest();
        request1.open("GET", "https://api.github.com/users/" + user + "/repos");
        request1.send();

        request1.onload = function () {

            var data1 = JSON.parse(request1.responseText);
            section.innerHTML = "";
            for (var i = 0; i < data1.length; i++) {
                var divRepository = document.createElement("div");
                divRepository.className = "repository";
                var h4 = document.createElement("h4");
                var p = document.createElement("p");
                p.textContent = data1[i].language;
                h4.textContent = data1[i].name;
                divRepository.appendChild(h4);
                divRepository.appendChild(p);
                section.appendChild(divRepository);
            }
        }
    })
}
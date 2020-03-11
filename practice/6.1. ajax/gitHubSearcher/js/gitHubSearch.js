
var input = document.querySelector(".form-control");
var button = document.querySelector(".dugme");
var body = document.querySelector("body");
var div = document.querySelector(".profile")

button.onclick = function () {


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
            var div1 = document.createElement("div");
            div1.className = "profiles col";
            div1.appendChild(img);
            div1.appendChild(name);
            div.appendChild(div1);
            input.value = "";

        }
        addClick();
    }

}
function addClick() {

    console.log("bla");

    $(".profiles").on("click", function (event) {
        var user = event.currentTarget.querySelector("h3").textContent;
        console.log(user);


        var request1 = new XMLHttpRequest();
        request1.open("GET", "https://api.github.com/users/" + user + "/repos");
        request1.send();

        request1.onload = function () {
            var data1 = JSON.parse(request1.responseText);
            console.log(data1);
            var section = document.querySelector("section");
            section.innerHTML = "";
            for (var i = 0; i < data1.length; i++) {
                var divRep = document.createElement("div");
                divRep.textContent = data1[i].name;
                section.appendChild(divRep);
            }
        }
    })
}
let input = document.querySelector(".form-control");
let div = document.querySelector(".row");

let request = new XMLHttpRequest();
request.open("GET", "http://api.tvmaze.com/shows");
request.send();

request.onload = function() {
    let data = JSON.parse(request.responseText);
    console.log(data);

    for (let i = 0; i < 50; i++) {
        let img = document.createElement("img");
        let h3 = document.createElement("h3");
        let title = document.createElement("div");
        let link = document.createElement("a");
        link.setAttribute("href", "profile.html?id=" + data[i].id);
        link.setAttribute("target", "_blank");
        title.className = "col title";
        img.setAttribute("src", data[i].image.medium);
        h3.textContent = data[i].name;
        link.appendChild(h3);
        title.appendChild(img);
        title.appendChild(link);
        div.appendChild(title);
    }
};
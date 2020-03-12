let key = "AIzaSyDjI1MqtVHwY_nhMTYZkXnxn7dRr1AskI8";
let input = document.querySelector("input");
let button = document.querySelector("#button");
let second = document.querySelector("#second");
let first = document.querySelector("#first");

button.onclick = function () {
    let request = new XMLHttpRequest();
    request.open("GET", "https://www.googleapis.com/youtube/v3/search?part=snippet&q=" + input.value + "&key=" + key);
    request.send();
    second.innerHTML = "";
    first.innerHTML = "";

    request.onload = function () {
        var data = JSON.parse(request.responseText);

        for (let i = 0; i < data.items.length; i++) {
            let img = document.createElement("img");
            let descript = document.createElement("div");
            let h3 = document.createElement("h3");
            let p = document.createElement("p");
            let main = document.createElement("div");
            let iframe = document.createElement("iframe")
            main.setAttribute("data-id", data.items[i].id.videoId);
            main.className = "col main";
            img.setAttribute("src", data.items[i].snippet.thumbnails.default.url);
            h3.textContent = data.items[i].snippet.title;
            p.textContent = data.items[i].snippet.description;
            descript.appendChild(h3);
            descript.appendChild(p);
            main.appendChild(img);
            main.appendChild(descript);
            second.appendChild(main);
            main.addEventListener("click", function () {
                first.innerHTML = "";
                let video = event.currentTarget.dataset.id;
                iframe.setAttribute("src", "https://www.youtube.com/embed/" + video);
                iframe.setAttribute("width", 520);
                iframe.setAttribute("height", 300);
                first.appendChild(iframe)
            })
        }
    }
}




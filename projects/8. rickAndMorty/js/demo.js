let main = document.querySelector(".main")
let next = document.querySelector(".next");
let previous = document.querySelector(".previous")
let count = 1;

let request = new XMLHttpRequest();
request.open("GET", "https://rickandmortyapi.com/api/character/");
request.send();

request.onload = function() {
    let data = JSON.parse(request.responseText);
    console.log(data);
    for (let i = 0; i < data.results.length; i++) {
        let div = document.createElement("div");
        let img = document.createElement("img");
        let h5 = document.createElement("h5");
        let button = document.createElement("button")
        div.className = "profile col-sm-12 col-md-6 col-lg-4 col-xl-3";
        img.setAttribute("src", data.results[i].image);
        h5.textContent = data.results[i].name;
        button.textContent = "Like";
        div.appendChild(img);
        div.appendChild(h5);
        div.appendChild(button)
        main.appendChild(div);
    }
}



let changeNext = function() {
    if (count === 25) {
        alert("Go backward, there is nobody forward!")
        return;
    }
    count++;
    let request = new XMLHttpRequest();
    request.open("GET", `https://rickandmortyapi.com/api/character/?page=${count}`)
    request.send();

    request.onload = function() {
        let data = JSON.parse(request.responseText);
        console.log(data)
        main.innerHTML = "";
        for (let i = 0; i < data.results.length; i++) {
            let div = document.createElement("div");
            let img = document.createElement("img");
            let h5 = document.createElement("h5");
            let button = document.createElement("button")
            div.className = "profile col";
            img.setAttribute("src", data.results[i].image);
            h5.textContent = data.results[i].name;
            button.textContent = "Like";
            div.appendChild(img);
            div.appendChild(h5);
            div.appendChild(button)
            main.appendChild(div);
        }
    }
}



let changePrevious = function() {
    if (count === 1) {
        alert("Go forward, there is nobody backward!");
        return;
    }
    count--;
    let request = new XMLHttpRequest();
    request.open("GET", `https://rickandmortyapi.com/api/character/?page=${count}`)
    request.send();

    request.onload = function() {
        let data = JSON.parse(request.responseText);
        console.log(data)
        main.innerHTML = "";
        for (let i = 0; i < data.results.length; i++) {
            let div = document.createElement("div");
            let img = document.createElement("img");
            let h5 = document.createElement("h5");
            let button = document.createElement("button")
            div.className = "profile col";
            img.setAttribute("src", data.results[i].image);
            h5.textContent = data.results[i].name;
            button.textContent = "Like";
            div.appendChild(img);
            div.appendChild(h5);
            div.appendChild(button)
            main.appendChild(div);
        }
    }
}

previous.addEventListener("click", changePrevious)
next.addEventListener("click", changeNext)
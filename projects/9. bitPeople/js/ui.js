export const gridAndList = () => document.querySelector(".visible");
export const refresh = () => document.querySelector(".refreshBtn");
export const wrapper = () => document.querySelector(".wrapper");
export const getInput = () => document.getElementById("input");
export const getTimer = () => document.getElementById("timer");

export const renderListUsers = (data) => {

    const $main = document.querySelector(".wrapper")
    $main.innerHTML = "";
    let $searchBar = document.querySelector("div.searchBar");
    let $statisticDiv = document.querySelector(".stats")
    let $users = "";
    let male = 0;
    let female = 0;

    data.results.forEach(element => {

        if (element.gender === "male") {
            male++;
        } else {
            female++;
        }

        let dob = new Date(element.dob.date)
        let gender = element.gender === "female" ? "female" : "";

        $users += `<div class="row listOfUsers ${gender}">
        <div class="col-sm-12 col flexList">
        <div class=""><img src="${element.picture.medium}" alt="" class="profileCircle text-right"></div>
        <div class="">
        <ul>
            <li>${element.name.first} ${element.name.last}</li>
            <li><i class="fa fa-envelope"></i> ${hideEmail(element.email)}</li>
            <li><i class="fa fa-birthday-cake"></i> ${dob.getDate()}.${dob.getMonth()+1}.${dob.getFullYear()}.</li>
        </ul>
    </div>
    </div>
    </div>`
    });
    const loader = document.querySelector("#loader");
    loader.style.display = "none";
    $main.innerHTML = $users;
    let $stats = `<div><p>Male: ${male}, Female: ${female}</p></div>`;
    $statisticDiv.innerHTML = $stats;
    $searchBar.style.display = "block";
}

export const renderGridUsers = (data) => {

    const $main = document.querySelector(".wrapper");
    $main.innerHTML = "";
    let $searchBar = document.querySelector("div.searchBar");
    let $statisticDiv = document.querySelector(".stats");
    const $row = document.createElement("div");
    $row.setAttribute("class", "row");
    $main.appendChild($row);
    let $users = "";
    let male = 0;
    let female = 0;

    data.results.forEach(element => {

        if (element.gender === "male") {
            male++;
        } else {
            female++;
        }

        let dob = new Date(element.dob.date);
        let gender = element.gender === "female" ? "female" : "";

        $users += `<div class="col-lg-4 col-md-6 col-sm-12 gridOfUsers"> 
        <div class="card ${gender}">
        <div class="image-abs">
        <img src="${element.picture.large}" class="card-img-top" alt="...">
        <h3 class="card-title abs">${element.name.first} ${element.name.last}</h3>
        </div>
        <div class="card-body">
          <h5 class="card-title"><i class="fa fa-envelope"></i> ${hideEmail(element.email)}</h5>
          <h5 class="card-title"><i class="fa fa-birthday-cake"></i> ${dob.getDate()}.${dob.getMonth()+1}.${dob.getFullYear()}.</h5>
        </div>
       
      </div>
      </div>`
    });
    const loader = document.querySelector("#loader");
    loader.style.display = "none";
    $row.innerHTML = $users;
    let $stats = `<div><p>Male: ${male}, Female: ${female}</p></div>`;
    $statisticDiv.innerHTML = $stats;
    $searchBar.style.display = "block";
}


export const switcher = () => {

    let data = JSON.parse(localStorage.getItem("users"));

    const x = document.querySelector(".first");
    const y = document.querySelector(".second");
    let grid = false;
    if (x.id === "visib") {
        x.id = "unvisib";
        y.id = "visib";
        grid = true;
        renderGridUsers(data)
    } else {
        x.id = "visib";
        y.id = "unvisib";
        renderListUsers(data);
    }
    localStorage.setItem("grid", grid)
}


export const notFound = () => {
    const $container = document.querySelector(".wrapper")
    $container.innerHTML = "";
    const $img = document.createElement("img");
    $img.setAttribute("src", "./images/not_found.png");
    $img.setAttribute("class", "col-sm-12 col-md-6 imgNotFound")
    const $row = document.createElement("row");
    $container.classList = "container wrapper text-center";
    $row.appendChild($img)
    $container.appendChild($row);
}


function hideEmail(input) {
    let domain = "";
    let userName = "";
    let count = false;
    let firstStr = "";
    let middleStr = "";
    for (var i = 0; i < input.length; i++) {
        if (input[i] !== "@" && count === false) {
            userName += input[i];
        }
        if (input[i] === "@" || count) {
            count = true;
            domain += input[i]
        }
    }
    for (var k = 0; k < userName.length; k++) {
        if (k < 3) {
            firstStr += userName[k];
        }
        if (k + 3 === userName.length || k + 2 === userName.length || k + 1 === userName.length) {
            middleStr += userName[k];
        }
    }
    return `${firstStr}...${middleStr}${domain}`;
}
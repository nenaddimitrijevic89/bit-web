export const goNext = () => $(".next")
export const goPrevious = () => $(".previous");
export const getResidents = () => document.querySelector("#residents");
export const buttonLeft = () => document.querySelector(".but1>a");
export const buttonRight = () => document.querySelector(".but3>a");
export const buttonCenter = () => document.querySelector(".but2>a");


export const renderAllCharacters = (data) => {

    const button = document.querySelector(".but1>a");
    const button3 = document.querySelector(".but3>a");
    const button2 = document.querySelector(".but2>a");
    localStorage.setItem("id", button.textContent);
    localStorage.setItem("id2", button3.textContent);
    localStorage.setItem("id3", button2.textContent);
    let $div = $(".main");
    $div.html("");
    let $img = "";

    $(data.results).each(function (element) {
        $img += `
        <div class="col mb-4">
        <div class="card back">
        <a href="profile.html?=${this.id}" target="_blank">
        <div class="image-abs">
          <img src="${this.image}" class="card-img-top" alt="...">
          <h3 class="card-title abs">${this.name}</h3>
          </div>
          </a>
          <div class="card-body text-center">
            <button class="likeBtn"><img src="./images/like.png" id="like"></button>
          </div>
        </div>
      </div>`
    });
    $div.append($img);
    $("button").on("click", function () {
        $(this).toggleClass("active");
    })
}

export const renderSingleCharacter = (data) => {
    const $div = $(".main");
    const $profile = `<div class="col-sm-12 col-md-6 col-lg-6">
        <div class="card single">
          <img src="${data.image}" class="card-img-top" alt="...">
        </div>
      </div>
      <div class="col-sm-12 col-md-6 col-lg-6">
      <div class="card info">
      <h2 class="card-title">${data.name}</h2>
      <h4 class="card-title"><span>status: </span>${data.status}</h4>
      <h4 class="card-title"><span>species: </span>${data.species}</h4>
      <h4 class="card-title"><span>type: </span>${data.type}</h4>
      <h4 class="card-title"><span>gender: </span>${data.gender}</h4>
      <h4 class="card-title"><span>location: </span><a href="location.html?=${data.location.url}">${data.location.name}</a></h4>
      <h4 class="card-title"><span>no. of episodes: </span><a href="episodes.html?=${data.id}">${data.episode.length}</a></h4>
      <h4 class="card-title"><span>created: </span>${new Date(data.created).getFullYear()}</h4>
      </div>
    </div>`;
    $div.append($profile);
}

export const renderLocation = (data) => {
    const $div = $(".location");
    const $location = `<div class="col-sm-12 col-md-6 col-lg-6 loc-card">
  <div class="card info">
  <h2 class="card-title">${data.name}</h2>
  <h4 class="card-title"><span>id: </span><a href="location.html?=${data.id}">${data.id}</a></h4>
  <h4 class="card-title"><span>type: </span>${data.type}</h4>
  <h4 class="card-title"><span>dimension: </span>${data.dimension}</h4>
  <h4 class="card-title"><span>no. of residents: </span>${data.residents.length}</h4>
  <h4 class="card-title"><span>created: </span>${new Date(data.created).getFullYear()}</h4>
  </div>
</div>`;
    $div.append($location);
}

export const renderEpisode = (data) => {
    const $div = $(".location");
    const $episode = `<div class="col-sm-12 col-md-6 col-lg-6 loc-card">
    <div class="card info">
    <h2 class="card-title">${data.name}</h2>
    <h4 class="card-title"><span>id: </span><a href="episodes.html?=!${data.id}">${data.id}</a></h4>
    <h4 class="card-title"><span>episode: </span>${data.episode}</h4>
    <h4 class="card-title"><span>no. of characters: </span>${data.characters.length}</h4>
    <h4 class="card-title"><span>air-date: </span>${data.air_date}</h4>
    </div>
    </div>`;
    $div.append($episode);
}

export const renderAllEpisodes = (data) => {
    for (let i = 0; i < data.results.length; i++) {
        renderEpisode(data.results[i]);
    }
}

export const renderAllLocations = (data) => {
    for (let i = 0; i < data.results.length; i++) {
        renderLocation(data.results[i])
    }
}

export const cleanMainDiv = () => {
    console.log("clean")
    const $div = $(".main");
    $div.html("");
}

export const cleanDiv = () => {
    console.log("clean")
    const $div = $(".location");
    $div.html("");
}

export const pagination = (counter) => {
    let button = document.querySelector(".but1>a");
    button.style.display = "block";
    let button2 = document.querySelector(".but2>a");
    let button3 = document.querySelector(".but3>a");
    button3.style.display = "block";
    let number = button.innerHTML;
    let number2 = button2.innerHTML;
    let number3 = button3.innerHTML;

    if (number >= 0 && number < 31) {
        let a = Number(number) + counter;
        let b = Number(number2) + counter;
        let c = Number(number3) + counter;
        if (a === 0) {
            displayButton()
        }
        if (c === 28) {
            button3.style.display = "none";
        }
        button.textContent = a;
        button2.textContent = b;
        button3.textContent = c;
    }
}

export const displayButton = () => {
    let button = document.querySelector(".but1>a");
    button.style.display = "none";
}



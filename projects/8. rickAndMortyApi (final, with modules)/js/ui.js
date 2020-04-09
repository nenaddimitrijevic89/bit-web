const $characters = document.querySelector(".characters");
const $singleProfile = document.querySelector(".profileImg");
const $nameProfile = document.querySelector(".name h1");
const $about = document.querySelector(".about")
export const goNext = () => document.querySelector(".next");
export const goPrevious = () => document.querySelector(".previous")

/******************************************/

export const renderCharacters = (data) => {
    let $card = "";

    for (let i = 0; i < data.results.length; i++) {
        $card += `<div class="profiles col-sm-12 col-md-6 col-lg-4 col-xl-3">
        <div class="card">
        <a href="profile.html?=${data.results[i].id}" target="_blank">
        <img src="${data.results[i].image}" class="card-img-top" alt="" >
        </a>
        <div class="card-body">
          <h5 class="card-title">${data.results[i].name}</h5>
        </div>
        <div class="card-footer">
        <button class="button">
          <img src="./images/like.png" class="like">
          </button>
        </div>
        </div>
        </div>`
    };
    $characters.innerHTML = $card;
}

/**********************************************/

export const renderSingleCharacter = (data) => {

    const $img = document.createElement("img");
    $img.setAttribute("src", data.image);
    $singleProfile.appendChild($img);
    $nameProfile.textContent = data.name;

    const $info = `<h4>id: ${data.id}</h4>
    <h4>status: ${data.status}</h4>
    <h4>species: ${data.species}</h4>
    <h4>gender: ${data.gender}</h4>
    <h4>origin: ${data.origin.name}</h4>
    <h4>location: ${data.location.name}</h4>`;

    $about.innerHTML = $info;
}

/********************************************/

export const renderLocations = (data) => {
    let $card = "";

    for (let i = 0; i < data.results.length; i++) {
        $card += `<div class="profiles col-sm-12 col-md-6 col-lg-4 col-xl-3">
        <div class="card">
        <div class="card-body">
          <h5 class="card-title">${data.results[i].name}</h5>
        </div>
        <div class="card-footer">
        <h6>population: ${data.results[i].residents.length}</h6>
        </div>
        </div>
        </div>`
    };
    $characters.innerHTML = $card;
}


/********************************************/

export const renderEpisodes = (data) => {
    let $card = "";

    for (let i = 0; i < data.results.length; i++) {
        $card += `<div class="profiles col-sm-12 col-md-6 col-lg-4 col-xl-3">
  <div class="card">
  <h6 class="card-title">${data.results[i].episode}</h6>
    <h5 class="card-title">${data.results[i].name}</h5>
    <h6 class="card-title">airdate: ${data.results[i].air_date}</h6>
  </div>
  </div>`;
    }
    $characters.innerHTML = $card;
}
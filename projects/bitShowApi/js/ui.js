const $listOfShows = document.querySelector(".listOfShows");
export const getInput = () => document.querySelector("input");
export const getInputValue = () => getInput().value;
const $searchList = document.querySelector(".searcher");
const $poster = document.querySelector(".poster");
const $showName = document.querySelector(".about h1");
const $description = document.querySelector(".description");



/********************************* */

const renderShows = (shows) => {
    let allShowCards = "";

    shows.sort((a, b) => {
        if (a.rating.average > b.rating.average) {
            return -1;
        } else {
            return 1;
        }
    });
    for (let i = 0; i < 50; i++) {
        allShowCards +=
            `<div class="col-sm-12 col-md-6 col-lg-3">
        <div class="card">
            <a href="about.html?=${shows[i].id}" target="_blank"><img src="${shows[i].image.medium}" class="card-img-top" alt=""></a>
            <div class="card-body">
                <h5 class="card-title">${shows[i].name}</h5>
        </div>
    </div>
</div>`
    }
    $listOfShows.innerHTML = allShowCards;
}


/********************************************/


const renderSingleShow = (show) => {
    const $img = document.createElement("img");
    $img.setAttribute("src", show.image.original);
    $showName.textContent = show.name;
    $poster.appendChild($img);
    $description.innerHTML = show.summary;
}


/********************************************* */

const makingList = (show) => {
    const $ulSearch = document.createElement("ul");
    console.log(getInputValue())
    if (!getInputValue() === " " || getInputValue() === "") {
        $searchList.innerHTML = "";
    }
    for (let i = 0; i < show.length; i++) {
        $searchList.innerHTML = "";
        const $li = document.createElement("li");
        const $link = document.createElement("a");
        $link.setAttribute("href", `about.html?=${show[i].show.id}`)
        $link.setAttribute("target", "_blank")
        $li.textContent = show[i].show.name;
        $link.appendChild($li);
        $ulSearch.appendChild($link);
        $searchList.appendChild($ulSearch);
    }
}


/***********************************************/

const renderSeasons = (data) => {
    const $ul = document.querySelector(".seasons ul");
    $ul.innerHTML = `<h3>Seasons (${data.length})</h3>`
    console.log(data)
    if (data.length > 5) {
        for (let i = 0; i < 5; i++) {
            const $li = document.createElement("li");
            $li.textContent = `${data[i].premiereDate} - ${data[i].endDate}`;
            $ul.appendChild($li)
        }
        const $dot = document.createElement("h6")
        const $link = document.createElement("a");
        $link.setAttribute("href", "#")
        $dot.textContent = ". . . click for more seasons";
        $link.appendChild($dot)
        $ul.appendChild($link);
    } else {
        data.forEach(element => {
            const $li = document.createElement("li");
            $li.textContent = `${element.premiereDate} - ${element.endDate}`;
            $ul.appendChild($li)
        });
    }
}

/**************      render actors list     ******************/

export const renderCastList = (actors) => {
    const id = window.location.search;
    const $ul = document.querySelector(".cast ul");
    const $link = document.createElement("a");
    const $str = document.createElement("h6");
    $str.textContent = ". . . see Full Cast";
    $ul.innerHTML = `<h3>Cast</h3>`;
    $link.setAttribute("href", `cast.html${id}`);
    $link.setAttribute("target", "_blank");
    for (let i = 0; i < 5; i++) {
        const $li = document.createElement("li");
        $li.textContent = actors[i].person.name;
        $ul.appendChild($li);
    }
    $link.appendChild($str);
    $ul.appendChild($link);
}


/******************   render full actors list     *****************/


const renderFullCast = (actors) => {

    let $actorCard = "";

    actors.forEach(actor => {
        $actorCard += `<div class="col-sm-12 col-md-6 col-lg-3">
        <div class="card">
            <img src="${actor.person.image.medium}" class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-title">${actor.person.name}</h5>
                <h6 class="card-title">${actor.character.name}</h6>
        </div>
    </div>
</div>`
        console.log($listOfShows)
    })
    $listOfShows.innerHTML = $actorCard;
}

/******************     render crew list      *******************/

const renderCrewList = (crew) => {
    const id = window.location.search;
    const $ul = document.querySelector(".crew ul");
    const $link = document.createElement("a");
    const $str = document.createElement("h6");
    console.log(crew)
    $str.textContent = ". . . see Full Crew"
    $ul.innerHTML = `<h3>Crew</h3>`;
    $link.setAttribute("href", `crew.html${id}`);
    $link.setAttribute("target", "_blank");
    for (let i = 0; i < 5; i++) {
        const $li = document.createElement("li");
        $li.textContent = crew[i].type + " : " + crew[i].person.name;
        $ul.appendChild($li);
    }
    $link.appendChild($str);
    $ul.appendChild($link);
}




const renderFullCrew = (crew) => {
    let $crewCard = "";

    crew.forEach(element => {

        console.log(element)
        $crewCard += `<div class="col-sm-12 col-md-6 col-lg-3">
        <div class="card">
            <img src="" class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-title">${element.type}</h5>
                <h6 class="card-title">${element.person.name}</h6>
        </div>
    </div>
</div>`
        console.log($listOfShows)
    })
    $listOfShows.innerHTML = $crewCard;
}








/****************************************************/

export { renderShows, renderSingleShow, makingList, renderSeasons, renderFullCast, renderCrewList, renderFullCrew }
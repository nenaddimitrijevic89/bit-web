const $listOfShows = document.querySelector(".listOfShows");
export const getInput = () => document.querySelector("input");
export const getInputValue = () => getInput().value;
const $searchList = document.querySelector(".searcher");
const $poster = document.querySelector(".poster");
const $showName = document.querySelector(".about h1");
const $description = document.querySelector(".description");

export const getButton = () => document.querySelector("button");

export const goTo = () => {
    const id = window.location.search.slice(2);
    window.location.href = `info.html?=${id}`;

}

/*****************      render main page     *****************/

export const renderShows = (shows) => {
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

/*******************      render single show page      ********************/

export const renderSingleShow = (show) => {
    const $img = document.createElement("img");
    $img.setAttribute("src", show.image.original);
    $showName.textContent = show.name;
    $poster.appendChild($img);
    $description.innerHTML = show.summary;
}

/*****************     dropdown search list     **********************/

export const makingList = (show) => {
    const $ulSearch = document.createElement("ul");

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

/************      render seasons list     ******************/

export const renderSeasons = (data) => {
    const id = window.location.search;

    const $ul = document.querySelector(".seasons ul");
    $ul.innerHTML = `<h3>Seasons (${data.length})</h3>`
    if (data.length > 5) {
        for (let i = 0; i < 5; i++) {
            const $li = document.createElement("li");
            $li.textContent = `${data[i].premiereDate} - ${data[i].endDate}`;
            $ul.appendChild($li)
        }
        const $dot = document.createElement("h6")
        const $link = document.createElement("a");
        $link.setAttribute("href", `info.html${id}`);
        $link.setAttribute("target", "_blank")
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

/******************   render full actors list on new page    *****************/

export const renderFullCast = (actors) => {

    let $actorCard = "";

    actors.forEach(actor => {
        $actorCard += `<div class="col-sm-12 col-md-6 col-lg-3">
        <div class="card">
            <img src="${actor.person.image.medium}" class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-title">${actor.person.name}</h5>
                <h6 class="card-title">"${actor.character.name}"</h6>
        </div>
    </div>
</div>`
    })
    $listOfShows.innerHTML = $actorCard;
}

/******************     render crew list      *******************/

export const renderCrewList = (crew) => {
    const id = window.location.search;
    const $ul = document.querySelector(".crew ul");
    const $link = document.createElement("a");
    const $str = document.createElement("h6");
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

/*************    render full crew list on new page  *****************/

export const renderFullCrew = (crew) => {
    let $crewCard = "";

    crew.forEach(element => {

        console.log(element)
        $crewCard += `<div class="col-sm-12 col-md-6 col-lg-3">
        <div class="card">
            <div class="card-body">
                <h6 class="card-title">${element.type}</h6>
                <h5 class="card-title">${element.person.name}</h5>
        </div>
    </div>
</div>`
    })
    $listOfShows.innerHTML = $crewCard;
}

/****************       render aka list        *******************/

// export const renderAka = (data) => {

//     const id = window.location.search;
//     const $ul = document.querySelector(".aka ul");
//     const $link = document.createElement("a");
//     const $str = document.createElement("h6");
//     $str.textContent = ". . . see Full Aka's"
//     $ul.innerHTML = `<h3>Aka</h3>`;
//     $link.setAttribute("href", `info.html${id}`);
//     $link.setAttribute("target", "_blank");
//     for (let i = 0; i < 5; i++) {
//         const $li = document.createElement("li");
//         $li.textContent = data[i].name + " : " + data[i].country.name;
//         $ul.appendChild($li);
//     }
//     $link.appendChild($str);
//     $ul.appendChild($link);
// }

/********************       render full aka list on new page       *********************/

export const renderFullAka = (data) => {
    const $ul = document.querySelector(".aka ul");
    $ul.innerHTML = `<h3>Aka (${data.length})</h3>`;
    data.forEach(element => {
        const $li = document.createElement("li");

        if (element.country === null) {
            element.country = " / ";
            $li.textContent = `${element.name} - ${element.country}`;
            $ul.appendChild($li);
        } else {
            $li.textContent = `${element.name} - ${element.country.name}`;
            $ul.appendChild($li);
        }
    })
}

/*******************      render full season list on new page     *******************/

export const renderFullSeasons = (data) => {
    const $ul = document.querySelector(".seasons ul");
    $ul.innerHTML = `<h3>Seasons (${data.length})</h3>`

    data.forEach(element => {
        const $li = document.createElement("li");
        $li.textContent = `${element.premiereDate} - ${element.endDate}`;
        $ul.appendChild($li)
    });
}

/****************      render full episodes list on new page     ******************/

// export const renderFullEpisodes = (data) => {
//     console.log(data);
//     const $ul = document.querySelector(".episodes ul");
//     $ul.innerHTML = `<h3>Episodes (${data.length})</h3>`

//     data.forEach(element => {
//         const $li = document.createElement("li");
//         $li.textContent = `${element.season}.${element.number} - ${element.name}`;
//         $ul.appendChild($li)
//     });
// }

/*****************    render full episodes list on new page    ********************/

export const renderEpisodesInfo = (data) => {

    console.log(data);

    const $ul = document.querySelector(".episodes ul");
    $ul.innerHTML = `<h3>Episodes (${data.length})</h3>`
    let $info = "";
    const $div = document.querySelector(".episodeSummary")
    data.forEach(element => {
        $info += `<div class="col-sm-12 col-md-6 col-lg-3">
        <div class="card">
        <img src="${element.image.original}" class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-title">${element.season}.${element.number} ${element.name}</h5>
                <p class="card-title">${element.summary}</p>
        </div>
    </div>
</div>`
    })
    $div.innerHTML = $info;
}
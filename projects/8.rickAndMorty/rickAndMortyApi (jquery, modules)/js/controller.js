import { fetchAllCharacters, fetchSingleCharacter, fetchAllEpisodes, fetchAllLocations, fetchEpisode, fetchLocation } from "./data.js"
import { renderAllCharacters, goNext, goPrevious, renderSingleCharacter, renderLocation, getResidents, cleanMainDiv, cleanDiv, renderEpisode, renderAllEpisodes, renderAllLocations } from "./ui.js"
import { fetchData } from './fetch.js';

const next = goNext();
const previous = goPrevious();
const residentsBtn = getResidents();

const renderCharactersFromEpisode = (data) => {
    for (let i = 0; i < data.characters.length; i++) {
        fetchData(data.characters[i], renderSingleCharacter);
    }
}

const renderCharactersFromLocation = (data) => {
    for (let i = 0; i < data.residents.length; i++) {
        fetchData(data.residents[i], renderSingleCharacter);
    }
}

const renderEpisodesFromCharacter = (data) => {
    for (let i = 0; i < data.episode.length; i++) {
        fetchData(data.episode[i], renderEpisode);
    }
}


export const homePage = () => {
    let id = 1;
    fetchAllCharacters(id, renderAllCharacters);

    next.click(() => {
        console.log(id);
        if (id === 27) {
            return;
        } else {
            id++;
        }
        fetchAllCharacters(id, renderAllCharacters)
    })

    previous.click(() => {
        if (id === 1) {
            return;
        } else {
            id--;
        }
        fetchAllCharacters(id, renderAllCharacters);
    })
}


export const singlePage = () => {
    const id = window.location.search.slice(2);
    fetchSingleCharacter(id, renderSingleCharacter)
}

export const locationPage = () => {
    const id = window.location.search.slice(1);
    let counter = 1;
    if (id[0] === "=") {
        const newId = id.slice(1);
        fetchLocation(newId, renderLocation);
        residentsBtn.addEventListener("click", () => {
            cleanMainDiv();
            fetchLocation(newId, renderCharactersFromLocation);
        })
        return;
    }
    const url = window.location.search.slice(2);

    if (url === "" || url === " ") {
        cleanMainDiv()
        fetchAllLocations(counter, renderAllLocations);

        next.click(() => {
            counter++;
            cleanDiv();
            fetchAllLocations(counter, renderAllLocations)
        })

        previous.click(() => {
            counter--;
            cleanDiv();
            fetchAllLocations(counter, renderAllLocations)
        })
    } else {
        fetchData(url, renderLocation);
        residentsBtn.addEventListener("click", () => {
            cleanMainDiv();
            fetchData(url, renderCharactersFromLocation)
        })
    }
}

export const episodePage = () => {
    const id = window.location.search.slice(2);
    let counter = 1;
    if (id[0] === "!") {
        const newId = id.slice(1);
        fetchEpisode(newId, renderEpisode);
        residentsBtn.addEventListener("click", () => {
            cleanMainDiv();
            fetchEpisode(newId, renderCharactersFromEpisode);
        })
        return;
    }
    if (id !== " " && id !== "") {
        cleanMainDiv();
        fetchSingleCharacter(id, renderEpisodesFromCharacter);
    } else {
        cleanMainDiv();
        fetchAllEpisodes(counter, renderAllEpisodes)

        next.click(() => {
            counter++;
            cleanDiv()
            fetchAllEpisodes(counter, renderAllEpisodes);
        })

        previous.click(() => {
            counter--;
            cleanDiv();
            fetchAllEpisodes(counter, renderAllEpisodes);
        })
    }
}

const goNextEpisodePage = (data) => {
    fetchData(data.info.next, renderAllEpisodes)
}

const goPreviousEpisodePage = (data) => {
    fetchData(data.info.prev, renderAllEpisodes);
}

const goNextLocationPage = (data) => {
    fetchData(data.info.next, renderAllLocations)
}

const goPreviousLocationPage = (data) => {
    fetchData(data.info.prev, renderAllLocations);
}
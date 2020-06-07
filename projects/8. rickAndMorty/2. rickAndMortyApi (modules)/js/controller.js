import { fetchCharacters, fetchSingleCharacter, fetchLocations, fetchEpisodes } from './data.js';
import { renderCharacters, goNext, goPrevious, renderSingleCharacter, renderEpisodes, renderLocations } from './ui.js';



export const startHomepage = () => {

    let id = 1;
    fetchCharacters(id, renderCharacters);

    const next = goNext();
    next.addEventListener("click", () => {
        id++;
        fetchCharacters(id, renderCharacters);
    });

    const previous = goPrevious();
    previous.addEventListener("click", () => {
        id--;
        fetchCharacters(id, renderCharacters);
    })

}


export const startAboutPage = () => {
    const id = window.location.search.slice(2);
    fetchSingleCharacter(id, renderSingleCharacter);
}


export const startLocationPage = () => {

    let id = 1;
    fetchLocations(id, renderLocations);

    const next = goNext();
    next.addEventListener("click", () => {
        id++;
        fetchLocations(id, renderLocations)
    })

    const previous = goPrevious();
    previous.addEventListener("click", () => {
        id--;
        fetchLocations(id, renderLocations)
    })
}


export const startEpisodesPage = () => {

    let id = 1;
    fetchEpisodes(id, renderEpisodes);

    const next = goNext();
    next.addEventListener("click", () => {
        id++;
        fetchEpisodes(id, renderEpisodes)
        console.log(id)
    })

    const previous = goPrevious();
    previous.addEventListener("click", () => {
        id--;
        fetchEpisodes(id, renderEpisodes)
    })
}
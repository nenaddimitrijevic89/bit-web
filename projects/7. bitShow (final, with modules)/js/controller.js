import { fetchShows, fetchShow, fetchSearchShow, fetchShowSeasons, fetchCast, fetchCrew, fetchAka, fetchEpisodes } from './data.js';
import { renderShows, renderSingleShow, makingList, getInput, getInputValue, renderSeasons, renderCastList, renderFullCast, renderCrewList, renderFullCrew, renderFullAka, getButton, goTo, renderFullSeasons, renderEpisodesInfo } from './ui.js';


const renderId = () => {
    const id = window.location.search.slice(2);
    return id;
}


const search = () => {
    const inputValue = getInputValue();
    fetchSearchShow(inputValue, makingList);
}


const searchList = () => {
    const input = getInput();
    input.addEventListener("keyup", search)
}


export const startHomepage = () => {
    fetchShows(renderShows);
    searchList();
}


export const startSingleShow = () => {
    const id = renderId()
    fetchShow(id, renderSingleShow);
    searchList()
    fetchShowSeasons(id, renderSeasons)
    fetchCast(id, renderCastList);
    fetchCrew(id, renderCrewList)

    const $button = getButton();
    $button.addEventListener("click", goTo)
}


export const startCastList = () => {
    const id = renderId();
    fetchCast(id, renderFullCast)
    searchList()
}


export const startCrewList = () => {
    const id = renderId();
    fetchCrew(id, renderFullCrew)
    searchList()
}

export const startInfoList = () => {
    const id = renderId();
    fetchShowSeasons(id, renderFullSeasons)
    fetchAka(id, renderFullAka);
    fetchEpisodes(id, renderEpisodesInfo)
    searchList();
}
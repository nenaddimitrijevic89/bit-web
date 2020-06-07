import { fetchData } from './fetch.js';

export const fetchAllCharacters = (id, onSuccess) => {
    fetchData(`https://rickandmortyapi.com/api/character?page=${id}`, onSuccess)
}

export const fetchSingleCharacter = (id, onSuccess) => {
    fetchData(`https://rickandmortyapi.com/api/character/${id}`, onSuccess)
}

export const fetchAllEpisodes = (id, onSuccess) => {
    fetchData(`https://rickandmortyapi.com/api/episode?page=${id}`, onSuccess);
}

export const fetchEpisode = (id, onSuccess) => {
    fetchData(`https://rickandmortyapi.com/api/episode/${id}`, onSuccess);
}

export const fetchAllLocations = (id, onSuccess) => {
    fetchData(`https://rickandmortyapi.com/api/location?page=${id}`, onSuccess)
}

export const fetchLocation = (id, onSuccess) => {
    fetchData(`https://rickandmortyapi.com/api/location/${id}`, onSuccess);
}
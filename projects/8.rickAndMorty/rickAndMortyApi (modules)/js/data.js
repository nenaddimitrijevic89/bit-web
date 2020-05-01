import { fetch } from './fetch.js';

export const fetchCharacters = (id, onSuccess) => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${id}`, (data) => {
        console.log(data);
        onSuccess(data)
    })
}

export const fetchSingleCharacter = (id, onSuccess) => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`, (data) => {
        console.log(data);
        onSuccess(data)
    })
}

export const fetchLocations = (id, onSuccess) => {
    fetch(`https://rickandmortyapi.com/api/location/?page=${id}`, (data) => {
        console.log(data);
        onSuccess(data)
    })
}

export const fetchEpisodes = (id, onSuccess) => {
    fetch(`https://rickandmortyapi.com/api/episode/?page=${id}`, (data) => {
        console.log(data);
        onSuccess(data)
    })
}
import { baseURL } from "./baseAPI.js";


/**
 * 
 * @param {string} breedName 
 */
const getImageBreed = async function (breedName) {
    const url = baseURL + `/breed/${breedName}/images/random`;
    const promise = $.get(url, function (results) {
        return results
    });

    return promise
};

export { getImageBreed }
import { baseURL } from "./baseAPI.js";

/**
 * 
 * @param {string} breedName 
 * @param {string} subBreedName 
 * 
 */
export default function (breedName, subBreedName) {
    const url = baseURL + `/breed/${breedName}/${subBreedName}/images/random`

    const promise = $.get(url, function (results) {
        return results
    })

    return promise
};
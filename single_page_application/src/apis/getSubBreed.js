import { baseURL } from  "./baseAPI.js";

/**
 * @param {string} breedName
 */
export default async function (breedName) {
    const url = baseURL+`/breed/${breedName}/list`;
    const promise = $.get(url, function (results) {
        return results
    })
    
    return promise
}
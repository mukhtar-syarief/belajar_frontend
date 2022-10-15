import { baseUrl } from "../api/stateAPI.js";

function getImageUrl (keyword) {
    return baseUrl+`/breed/${keyword}/images/random`
}

export { getImageUrl }
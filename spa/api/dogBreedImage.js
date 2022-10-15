import { baseUrl } from "./stateAPI.js";


function getImage (keyword) {
    var imgLink = $.get(baseUrl+`/breed/${keyword}/images/random`, function (results) {
        return results
    })

    return imgLink
}


function getSubImage(keyword, parent) {
    var imgSubLink = $.get(baseUrl+`/breed/${parent}/${keyword}/images/random`, function (results) {
        return results
    })

    return imgSubLink
}

export { getImage, getSubImage }